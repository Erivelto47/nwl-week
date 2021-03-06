import {Request, Response} from "express";
import db from "../database/connection";

import convertHourToMinute from "../utils/converter/convertHourToMinutes";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {

  async index(request: Request, response: Response) {
    const filters = request.query;


    const subject = filters.subject as string;
    const week_day = filters.weekday as string;
    const time = filters.time as string;

    if(!subject || !week_day || !time) {
      return response.status(400).json({
        error: 'Missing filters to search classes'
      })
    }

    const timeInMinutes = convertHourToMinute(time);

    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` =  ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('user', 'classes.user_id', '=', 'user.id')
      .select(['classes.*', 'user.*']);

    response.send(classes)
  }

  async create(request: Request, response: Response)  {
      const {
        name,
        avatar,
        whatsapp,
        bio,
        cost,
        subject,
        schedule
      } = request.body;

      const trx = await db.transaction();
      try {
        const insertUsersIds = await trx('user').insert({
          name,
          avatar,
          whatsapp,
          bio,
        });

        const user_id = insertUsersIds[0];

        const insertedClassesIds = await trx('classes').insert({
          subject,
          cost,
          user_id,
        });

        const class_id = insertedClassesIds[0];

        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
          return {
            class_id,
            week_day: scheduleItem.week_day,
            from: convertHourToMinute(scheduleItem.from),
            to: convertHourToMinute(scheduleItem.to),
          };
        })

        await trx('class_schedule').insert(classSchedule);

        await trx.commit();

        return response.status(201).send();
      }catch (err) {
        await trx.rollback();
        return response.status(400).json({
          error: 'Unepected error while creating new class'
        })
      }
  }
}

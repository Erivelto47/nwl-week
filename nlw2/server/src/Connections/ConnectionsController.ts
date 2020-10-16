import {Request, Response} from "express";
import db from "../database/connection";

export default class ConnectionsController {

  async index(request: Request, response: Response) {

    const totalConnections = await db('connections').count('* as total');
    const { total } = totalConnections[0];

    return response.json({total})
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    const trx = await db.transaction();

    try {
      await trx('connections').insert({
        user_id,
      });
      trx.commit();
      return response.status(201).send()
    }catch (error) {
      trx.rollback();
      return response.status(404).send({
        'errorMsg': 'Error to create Connection',
        'errorLog': error.errorMsg
      })
    }
  }
}
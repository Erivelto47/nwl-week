import React, {useState, FormEvent} from 'react'

import Input from "../../components/input";
import Select from "../../components/select";
import PageHeader from "../../components/page-header";
import TeacherItem, {Teacher} from "../../components/teacher-item";

import api from "../../services/api";

import './style.css'

function TeacherList () {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [weekday, setWeekday] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers (e: FormEvent) {
    e.preventDefault();

    const response = await api
      .get('classes', {
        params: {
          subject,
          weekday,
          time,
        }
      });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes sao os Professores disponiveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            label="Materia"
            name="subject"
            value={subject}
            onChange={event => {
              setSubject(event.target.value)
            }}
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Ciencias', label: 'Ciencias'},
              {value: 'Fisica', label: 'Fisica'},
              {value: 'Matematica', label: 'Matematica'}
            ]}/>
          <Select
            label="Dia da Semana"
            name="week_day"
            value={weekday}
            onChange={event => {
              setWeekday(event.target.value)
            }}
            options={[
              {value: '1', label: 'Segunda-feira'},
              {value: '2', label: 'Terca-feira'},
              {value: '3', label: 'Quarta-feira'},
              {value: '4', label: 'Quinta-feira'},
              {value: '5', label: 'Sexta-feira'}
            ]}/>
          <Input
            label="Hora"
            name="hour"
            type="time"
            value={time}
            onChange={event => {
              setTime(event.target.value)
            }}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher}/>
        })}
      </main>
    </div>
  )
}

export default TeacherList;

import React from 'react'

import PageHeader from "../../components/page-header";

import './style.css'
import TeacherItem from "../../components/teacher-item";
import Input from "../../components/input";
import Select from "../../components/select";

function TeacherList () {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes sao os Professores disponiveis">
        <form id="search-teachers">
          <Select
            label="Materia"
            name="subject"
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
            options={[
              {value: '1', label: 'Segunda-feira'},
              {value: '2', label: 'Terca-feira'},
              {value: '3', label: 'Quarta-feira'},
              {value: '4', label: 'Quinta-feira'},
              {value: '5', label: 'Sexta-feira'}
            ]}/>
          <Input label="Hora" name="hour" type="time"/>
        </form>
      </PageHeader>

      <main>
      <TeacherItem/>
       <TeacherItem/>
       <TeacherItem/>
       <TeacherItem/>
       <TeacherItem/>
      </main>
    </div>
  )
}

export default TeacherList;

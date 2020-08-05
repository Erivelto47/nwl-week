import React from 'react'

import PageHeader from "../../components/page-header";
import avatarImg from '../../assets/images/avatar.png'
import wppIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'
import TeacherItem from "../../components/teacher-item";

function TeacherList () {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes sao os Professores disponiveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Materia</label>
            <input type="text" id="subject"/>
          </div>
          <div className="input-block">
            <label htmlFor="day-week">Dia da seman</label>
            <input type="text" id="day-week"/>
          </div>
          <div className="input-block">
            <label htmlFor="hour">Hora</label>
            <input type="text" id="hour"/>
          </div>
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

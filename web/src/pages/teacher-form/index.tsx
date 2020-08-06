import React from 'react'

import PageHeader from "../../components/page-header";
import Input from "../../components/input";

import warningIcon from '../../assets/images/icons/warning.svg'

import './style.css'
import TextArea from "../../components/text-area";
import Select from "../../components/select";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que voce quer dar aulas."
        description="O primeiro Passo e preencher esse formulario de inscricao"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input label="Nome completo" name="name"/>
          <Input label="Avatar" name="avatar"/>
          <Input label="whatsapp" name="whatsapp"/>
          <TextArea label="Biografia" name="bio"/>
        </fieldset>

        <fieldset>
          <legend>Sobre a Aula</legend>
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
          <Input
            label="Custo da sua hora por aula"
            name="cost"
            type="number"/>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm;

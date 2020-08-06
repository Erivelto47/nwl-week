import React, {useState, FormEvent} from 'react'
import { useHistory } from 'react-router-dom';

import PageHeader from "../../components/page-header";
import Input from "../../components/input";
import TextArea from "../../components/text-area";
import Select from "../../components/select";

import warningIcon from '../../assets/images/icons/warning.svg'

import api from "../../services/api";
import './style.css'

function TeacherForm () {
  const history = useHistory();

  //Form
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItem] = useState([
    {week_day: 0, from: '', to: ''}
  ]);

  function addNewScheduleItem () {
    setScheduleItem([
      ...scheduleItems,
      {week_day: 0, from: '', to: ''},
    ])
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com sucesso!');
      history.push('/');
    }).catch(() => alert('erro no cadastro'))

  }

  function setScheduleItemValue (position: number, field: string, value: string) {
    const updateScheduleItem = scheduleItems.map((scheduleItem, index) => {
      if(index === position) {
        return {...scheduleItem, [field]: value};
      }

      return scheduleItem;
    })

    setScheduleItem(updateScheduleItem);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que voce quer dar aulas."
        description="O primeiro Passo e preencher esse formulario de inscricao"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label="Nome completo"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value)
              }}
            />
            <Input
              label="whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value)
              }}
            />
            <TextArea
              label="Biografia"
              name="bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value)
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a Aula</legend>
            <Select
              label="Materia"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value)
              }}
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
              type="number"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value)
              }}
            />
          </fieldset>

          <fieldset>
            <legend>Horarios disponiveis
              <button type="button" onClick={addNewScheduleItem}> + Novo Horario
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    label="Dia da Semana"
                    name="week_day"
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    options={[
                      {value: '1', label: 'Segunda-feira'},
                      {value: '2', label: 'Terca-feira'},
                      {value: '3', label: 'Quarta-feira'},
                      {value: '4', label: 'Quinta-feira'},
                      {value: '5', label: 'Sexta-feira'}
                    ]}/>
                  <Input
                    label="Das"
                    name="from"
                    type="time"
                    value={scheduleItem.from}
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input
                    label="Ate"
                    name="to"
                    type="time"
                    value={scheduleItem.to}
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br/>
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;

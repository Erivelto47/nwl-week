import React from "react";

import avatarImg from "../../assets/images/avatar.png";
import wppIcon from "../../assets/images/icons/whatsapp.svg";

import './style.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src={avatarImg} alt="name of avatar"/>
        <div>
          <strong>Pedro da Silva</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>Entusiasta das melhores tecnologias de quimica avancada.
        <br/> <br/>
        Apaixonado por expolodir coidas em laboratorios e por mudar a vida das pessoas atraves de experiencias.
      </p>

      <footer>
        <p>
          Preco/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type={"button"}>
          <img src={wppIcon} alt={"Watsapp contact"}/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;

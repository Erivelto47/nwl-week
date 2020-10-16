import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './images/landing.svg'

function App() {
  return (
    <div id="page-landing">
        <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
            <h1>Leve</h1>
            <p>Visite</p>
        </main>
        </div>
    </div>
  );
}

export default App;

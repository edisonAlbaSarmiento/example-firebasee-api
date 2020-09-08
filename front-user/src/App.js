import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Continer,
  ContinerTitle,
  Title
} from './style';

function App() {
  const [dataUser,serDataUser] = useState('')
  useEffect(() => {
    fetch('https://us-central1-test-api-4bd02.cloudfunctions.net/api')
      .then(results => results.json())
      .then(data => {
        serDataUser(data.data)
      });
  }, []);
  console.log('dataUser',dataUser)
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://www.poli.edu.co/sites/default/files/logos/logo-poli-politecnico-grancolombiano2018.png'} className="App-logo" alt="logo" />
        <p>
          Informacion
        </p>
      </header>
      <Continer>
        <ContinerTitle>
          <Title>
            Nombre
          </Title>
          <p>
            {dataUser.name}
          </p>
        </ContinerTitle>
        <ContinerTitle>
          <Title>
            Apellido
          </Title>
          <p>
            {dataUser.lastName}
          </p>
        </ContinerTitle>
        <ContinerTitle>
          <Title>
            Teléfono
          </Title>
          <p>
            {dataUser.telephone}
          </p>
        </ContinerTitle>
        <ContinerTitle>
          <Title>
            Identificación
          </Title>
          <p>
            {dataUser.identification}
          </p>
        </ContinerTitle>
        <ContinerTitle>
          <Title>
            Profesión
          </Title>
          <p>
            {dataUser.profession}
          </p>
        </ContinerTitle>
        <ContinerTitle>
          <Title>
            Edad
          </Title>
          <p>
            {dataUser.age}
          </p>
        </ContinerTitle>
      </Continer>
    </div>
  );
}

export default App;

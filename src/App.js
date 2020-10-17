import React from 'react';
import './App.css';
//importar bulma
import 'bulma/css/bulma.css'
//importat componentes
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm';

function App() {
  return (
    <div className="App">

      <Title>Search Movies</Title>
      {/* se crea una clase para dar estilo, para que de esta manera se reutilizable*/}
      <div className="SearchForm-wrapper">
          <SearchForm />
      </div>
    
     
    </div>
  );
}

export default App;

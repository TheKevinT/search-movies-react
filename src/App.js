import React, { Component } from 'react';
import './App.css';
//importar bulma
import 'bulma/css/bulma.css'
//importat componentes
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';

class App extends Component {

  render(){
    //utilizar API nativa de javascript para manejar la URL o crear un enrutador
    const url = new URL(document.location) //dirección actual de la pagina
    const Page = url.searchParams.has('id') //si la ruta tiene un id
      ? <Detail id={url.searchParams.get('id')} />
      : <Home />

    return (
      <div className="App">
        { Page }
      </div>
    );
  }

  
}

export default App;

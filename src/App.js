import React, { Component } from 'react';
import './App.css';
//importar bulma
import 'bulma/css/bulma.css'
//importat componentes
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';

//importar ruta
import {Switch, Route } from 'react-router-dom'

class App extends Component {

  render(){
    return (
      <div className="App">
          <Switch>
            <Route exact path= '/' component={Home}/>
            <Route path= '/detail/:id' component={Detail}/>

          </Switch>
      </div>
    );
  }

  
}

export default App;

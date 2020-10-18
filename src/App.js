import React, { Component } from 'react';
import './App.css';
//importar bulma
import 'bulma/css/bulma.css'
//importat componentes
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm';
import { MoviesList } from './components/MoviesList';

class App extends Component {

  state = { results: [] }

  //actualiza el state de el componente
  _handleResults = (results) => {
    this.setState({ results })
  }


  render(){
    return (
      <div className="App">
  
        <Title>Search Movies</Title>
        {/* se crea una clase para dar estilo, para que de esta manera se reutilizable*/}
        <div className="SearchForm-wrapper">
            <SearchForm onResults={this._handleResults}/>
        </div>
  
        {this.state.results.length === 0
          ? <p>Sin resultados</p>
          : <MoviesList movies = {this.state.results}/>
        }

      </div>
    );
  }

  
}

export default App;

import React, { Component } from 'react';
import './App.css';
//importar bulma
import 'bulma/css/bulma.css'
//importat componentes
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm';

class App extends Component {

  state = { results: [] }

  //actualiza el state de el componente
  _handleResults = (results) => {
    this.setState({ results })
  }

  //itera cada resultado con el nuevo state del componente
  _renderResults(){
    const { results } = this.state
    return results.map( movie => {
      return <p key={movie.imdbID}>{movie.Title}</p>
  
    }

    )
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
          : this._renderResults()
        }
       
      </div>
    );
  }

  
}

export default App;

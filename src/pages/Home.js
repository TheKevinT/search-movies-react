import React, { Component, Fragment } from 'react'

import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'

export class Home extends Component{

    state = { usedSearch: false, results: [] }


    //actualiza el state de el componente
    _handleResults = (results) => {
      this.setState({ results, usedSearch: true})
    }
    _renderResults(){
      return this.state.results.length === 0
        ? <p style={{ color: 'white'}}>Sorry !.. Results not found ! </p>
        : <MoviesList movies = {this.state.results}/>
    }

    render(){
        return(
            <Fragment>
                <Title>SEARCH MOVIES</Title>
                {/* se crea una clase para dar estilo, para que de esta manera se reutilizable*/}
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this._handleResults}/>
                </div>
                {this.state.usedSearch
                ? this._renderResults()
                : <small>Use the form to search a movie</small>
                
                }

            </Fragment>
        
        )
    }


    
}
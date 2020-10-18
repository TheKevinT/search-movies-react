import React, { Component } from 'react'
import Prototypes from 'prop-types'

import { Movie } from '../components/Movie'


export class MoviesList extends Component{

    static prototypes = {
        movies: Prototypes.array
    }

    render(){
    const { movies } = this.props

    return(
        <div className="MoviesList">
            {
                movies.map( movie => {
                    return (
                        <div className="MoviesList-item" key={movie.imdbID}>
                            <Movie
                            title={movie.Title}
                            year={movie.Year}
                            poster={movie.Poster}
                            />
                        </div>
                    )
                
                  }
                )
            }
        </div>
      )
    }
}
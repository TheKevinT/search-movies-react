import React, { Component, Fragment } from 'react'


const API_KEY = 'd26e141f'


export class SearchForm extends Component{

    state ={
        inputMovie:'' //para guardar lo que se escribe en el input
    }

    _handleChange = (e) =>{
        this.setState({ inputMovie: e.target.value })

    }
    _handleSubmit = (e) => {
        e.preventDefault();
        //realizar petición al servicio web
        const { inputMovie } = this.state

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                //console.log(results);
                const { Search, totalResults } = results
                console.log({Search, totalResults})
                this.props.onResults(Search)

            })

    }

    render(){
        return(
            <Fragment>
              <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                     <input 
                     className="input" 
                     type="text" 
                     placeholder="Movie to Search"
                     onChange={this._handleChange}
                     />
                    </div>

                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                 </div>
              </form>  
                
            </Fragment>
            
        )
    }


}
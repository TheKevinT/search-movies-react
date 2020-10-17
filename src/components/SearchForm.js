import React, { Component, Fragment } from 'react'

export class SearchForm extends Component{

    state ={
        inputMovie:'' //para guardar lo que se escribe en el input
    }

    _handleChange = (e) =>{
        this.setState({ inputMovie: e.target.value })

    }
    _handleSubmit = (e) => {
        e.preventDefault();
        alert(this.state.inputMovie)

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
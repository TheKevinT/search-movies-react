import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = 'd26e141f'

export class Detail extends Component{

    static propTypes ={
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    
    }
    state ={ movie: {} }

    //metodo para recuperar la información de la pelicula
    _fetchMovie({ id }){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
             //console.log({movie})

             this.setState({ movie })

            })

    }
    //componente del ciclo de vida componentDidMount() que indica que el componente se ha renderizado almenos una vez

    componentDidMount(){
        console.log(this.props)
        const { id } = this.props.match.params
        this._fetchMovie({ id })

    }

    render(){

        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (

            <Fragment>
                <div>
                    <ButtonBackToHome/>
                    <h1 style={{color:'white', marginTop:'50px'}} className='title is-4'>Title: {Title}</h1>
                    <img src={Poster} alt={Title}/>
                    <div  className="container is-max-desktop">
                        <h3 style={{color:'white'}}><strong style={{color:'white'}}>Actors: </strong>{Actors}</h3>
                        <span style={{color:'white'}}><strong style={{color:'white'}}>MetaScore:</strong>{Metascore}</span>
                        <p><strong style={{color:'white'}}>Description: </strong>{Plot}</p>
                    </div>
                 
                </div>
            </Fragment>
            
        )
    }
       
    



}
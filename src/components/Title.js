import React from 'react'

//export const Title = > export nombrado para que donde lo utilicemos, siempre sea con el mismo nombre
export const Title = ({children}) =>(
    <h1 className="title" style={{color:'white'}}>{children}</h1>

    )
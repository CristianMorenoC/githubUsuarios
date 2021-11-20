import React from 'react'

//Estilos
import './Header.styles.css'


const Header = () => {
    return (
        <div className ='h-16 bg-amarillo flex justify-between items-center mi-clase'>
            <h2 className='ml-10  text-2xl tablet:text-3xl text-blanco '>Github API</h2>
        </div>
    )
}

export default Header

import React from 'react'

//Estilos
import './UserForm.styles.css'

const UserForm = ({handleUserName, handleSearchUser}) => {
    return (
        <form  
        action ='' 
        className =' w-5/6 tablet:w-3/4 m-auto mt-10 text-center'
        onSubmit ={(e) => handleSearchUser (e)}
        >

        <input
        type ='text'
        placeholder ='Usuario'
        className = 'p-4 w-134 tablet:w-3/4 search-input'
        onChange={({target})=> handleUserName(target)}
        />

        <input 
        type ='submit' 
        value ='Buscar !' 
        className ='p-4  w-1/3 tablet:w-1/4 bg-negro hover:bg-amarillo  text-blanco hover:text-negro search-input-button'/>
        </form>
    )
}

export default UserForm

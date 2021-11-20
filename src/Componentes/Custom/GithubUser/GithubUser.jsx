import React from 'react'
// se importa el link para que podamos crear el enlace interno en nuestra pagina 
import { Link } from 'react-router-dom'


//Estilos
import "./GithubUser.styles.css"


const GithubUser = (props) => {

    // Se traen las siguientes propiedades
    const {avatar,
        github,
        github_name,
        name,
        public_repos,
        followers,
        following
    } = props

    return (
        <div className ='w-1/3 m-auto'>
            <div className = 'card-header flex justify-between items-center p-10 p-10 h-10'>
                <img src={avatar} alt={github} className ='w-24 h-24'/>
                <h2>{github_name}</h2>
            </div> 

            <div className ='card-body flex justify-between items-center'>
                <p> 
                    <span className ='text-amarillo text-xl font-bold'>Repos:</span> {" "}
                    {public_repos}
                </p>

                <p> 
                {/* El link funcionara como una etiqueta ancla  */}
                {/* se pone esta ruta para que nos carge dicha vista */}
                    <Link to={`/followers/${github_name}`}>  
                        <span className ='text-amarillo  text-xl font-bold'>Followers:</span> {" "} 
                        {followers}
                    </Link>
                    
                </p>

                <p> 
                    <span className ='text-amarillo  text-xl font-bold'>Following:</span> {" "} 
                    {following}
                </p>

            </div>
        </div>
    )
}

export default GithubUser

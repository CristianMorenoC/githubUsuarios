import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'

//Componentes
import GithubUser from '../../Componentes/Custom/GithubUser/GithubUser'
import Loader from '../../Componentes/Custom/Loader/Loader'

const Followers = () => {
    //Hooks
    const {user} = useParams()
   //State
   const [followers,setFollowers] = useState([])
   const [loader,setLoader] = useState(false)

    // se usa el useEfect para que la funcion handleUserFollowers se dispare apenas se carge la vista 
    useEffect(() => {

        setFollowers([])
        setLoader(true)    
        const handleuserFollowers = async () =>{
            const response = await fetch(`https://api.github.com/users/${user}/followers`)
            const result = await response.json()
            setFollowers(result)
            console.log(result);
        }
        handleuserFollowers()
        setLoader(false)
    }, [user])
// Se pone como parametro la propiedad User al useEffect para que cada vez que note un cambio nos mande 
// a la lista de seguidores que tiene el usuario clikeado en una vista nueva 

    

    return (
        <div>
            <h2>Followers</h2>
            {followers && followers.length > 0 && !loader ?  (  
                followers.map(user =>(
                    <GithubUser 
                    avatar ={user?.avatar_url} 
                    github ={user?.html_url}
                    github_name ={user?.login}
                    />
                ))
            ): <Loader />      
            }
        </div>
    )
}

export default Followers

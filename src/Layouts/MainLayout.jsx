import React from 'react'

// componentes
import Header from '../Componentes/Custom/Header/Header'

// en este caso MainLayout recibe como porpiedad a children las propiedades que se le asignan en app.js
const MainLayout = (props) => {
    return (
        <div>
            <Header />
            {/* le indicamos que renderee a children  */}
            {props.children}
        </div>
    )
}

export default MainLayout

import React  from 'react';
import './App.css';

import {BrowserRouter ,Switch, Route} from "react-router-dom"

// Vistas
import Home from './Paginas/Home/Home';
import Followers from './Paginas/Followers/Followers';


//Layout
import MainLayout from './Layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>

      <Switch>
        {/* MainLayout es un layout que contiene el componente Header  */}
        {/* En este caso MainLayout hace la funcion de un contenedor padre */}
        {/* Todo el contenido que este dentro de MainLayout son los childrens (hijos) y estos son propiedades de MainLayout */}
        <MainLayout> 
          <Route path ='/' exact>
            <Home />
          </Route>
          
          <Route path ='/followers/:user' exact>
            <Followers />
          </Route>
        </MainLayout>
      </Switch>
    </BrowserRouter>
      
 
  );
}

export default App;

import React from "react";
import { BrowserRouter,  Route, Switch } from "react-router-dom";
import CadastroUsuarios from './paginas/CadastroUsuario/CadastroUsuario';
import menu from './paginas/menu';
import login from './paginas/login/Login';
import TelaInicial from './paginas/TelaInicial/telaInicial';
import ListaUsuarios from './paginas/listagemUsuarios/listagemUsuario';


function Routes() {
    return (
    <BrowserRouter>
      <Switch>
        <Route  path="/" exact={true} component={login} />
        <Route  path="/CadastroUsuarios" component={CadastroUsuarios} />
        <Route  path="/menu" component={menu} />
        <Route  path="/TelaInicial" component={TelaInicial} />
        <Route  path="/ListaUsuarios" component={ListaUsuarios} />
      
       
       
      </Switch>
    </BrowserRouter>
    );
  }


  export default Routes;
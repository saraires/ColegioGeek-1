import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profesor from './Pages/ProfesorInicio';
import Grupos from './Pages/ProfesorGrupos';
import Perfil from './Pages/ProfesorPerfil';
import Notas from './Pages/ProfesorNotas';
import Layout from "./Components/Layout";
import Informe from "./Pages/Informe";
import Materias from "./Pages/Materias";
import Notas from "./Pages/Notas"
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import PerfilEstudiante from "./Pages/PerfilEstudiante";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/informe-final" component={Informe} />
          <Route exact path="/materias" component={Materias} />
          <Route exact path="/notas" component={Notas} />
          <Route exact path="/profesor" component={Profesor} />
          <Route exact path="/profesor-grupos" component={Grupos} />
          <Route exact path="/profesor-perfil" component={Perfil} />
          <Route exact path="/profesor-grado-notas" component={Notas} />
          <Route exact path="/perfil/:id" component={PerfilEstudiante} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

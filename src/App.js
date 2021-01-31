import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profesor from './Pages/ProfesorInicio';
import Grupos from './Pages/ProfesorGrupos';
import Perfil from './Pages/ProfesorPerfil';
import Notas from './Pages/ProfesorNotas';
import Layout from "./Components/Layout";
import EstudianteInforme from "./Pages/EstudianteInforme";
import EstudianteMaterias from "./Pages/EstudianteMaterias";
import EstudianteNotas from "./Pages/EstudianteNotas"
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import PerfilEstudiante from "./Pages/PerfilEstudiante";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/estudiante-informe-final" component={EstudianteInforme} />
          <Route exact path="/estudiante-materias" component={EstudianteMaterias} />
          <Route exact path="/estudiante-notas" component={EstudianteNotas} />
          <Route exact path="/profesor" component={Profesor} />
          <Route exact path="/profesor-grupos" component={Grupos} />
          <Route exact path="/profesor-perfil" component={Perfil} />
          <Route exact path="/profesor-grado-notas" component={Notas} />
          <Route exact path="/estudiante-perfil/:id" component={PerfilEstudiante} />
          <Route exact path="/" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

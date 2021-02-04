import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Administrador
import Admin from "./Pages/AdminInicio";
import Grupo from "./Pages/AdminGrupos";

//  Profesor
import Profesor from "./Pages/ProfesorInicio";
import Grupos from "./Pages/ProfesorGrupos";
import Perfil from "./Pages/ProfesorPerfil";
import Notas from "./Pages/ProfesorNotas";

// Estudiante
import EstudianteInforme from "./Pages/EstudianteInforme";
import EstudianteMaterias from "./Pages/EstudianteMaterias";
import EstudianteNotas from "./Pages/EstudianteNotas";
import PerfilEstudiante from "./Pages/PerfilEstudiante";
import EstudianteInicio from "./Pages/EstudianteInicio";

// Sing in - Sing Up
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PerfilAdministrado from "./Pages/PerfilAdministrador";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Rutas Estudiante */}
        <Route exact path="/estudiante" component={EstudianteInicio} />
        <Route
          exact
          path="/estudiante-informe/:id"
          component={EstudianteInforme}
        />
          <Route
            exact
            path="/estudiante-materia/:id"
            component={EstudianteMaterias}
          />
          <Route
            exact
            path="/estudiante-nota/:id"
            component={EstudianteNotas}
          />
          <Route
            exact
            path="/estudiante-perfil/:id"
            component={PerfilEstudiante}
          />
        {/* Rutas profesor */}
        <Route exact path="/profesor" component={Profesor} />
        <Route exact path="/profesor-grupos/:id" component={Grupos} />
        <Route exact path="/profesor-perfil/:id" component={Perfil} />
        <Route exact path="/profesor-notas/:id/:cod_grupo" component={Notas} />
        {/* Rutas Sing */}
        <Route exact path="/" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />

        {/* Rutas Admin */}
        <Route exact path="/administrador" component={Admin} />
        <Route exact path="/administrador-grupo" component={Grupo} />
        <Route exact path="/administrador-perfil/:id" component={PerfilAdministrado} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

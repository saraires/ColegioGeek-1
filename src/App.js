import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Components/Layout";
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

// Sing in - Sing Up
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Rutas Estudiante */}
        <Route
          exact
          path="/estudiante-informe-final"
          component={EstudianteInforme}
        />
        <Route
          exact
          path="/estudiante-materias"
          component={EstudianteMaterias}
        />
        <Route exact path="/estudiante-notas" component={EstudianteNotas} />
        <Route
          exact
          path="/estudiante-perfil/:id"
          component={PerfilEstudiante}
        />
        {/* Rutas profesor */}
        <Route exact path="/profesor" component={Profesor} />
        <Route exact path="/profesor-grupos" component={Grupos} />
        <Route exact path="/profesor-perfil" component={Perfil} />
        <Route exact path="/profesor-grado-notas" component={Notas} />
        {/* Rutas Sing */}

        <Route exact path="/" component={SignIn} />
        <Route exact path="/SignUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

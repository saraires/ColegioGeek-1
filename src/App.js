import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Components/Layout";

// Administrador 
import Admin from "./Pages/AdminInicio";
import VerGrupos from "./Pages/VerGrupos";
import RegistroGrupo from "./Pages/RegistroGrupo";

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

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* Rutas Estudiante */}
          <Route exact path="/estudiante" component={EstudianteInicio} />
          <Route exact path="/estudiante-informe-final" component={EstudianteInforme}/>
          <Route exact path="/estudiante-materia/:id" component={EstudianteMaterias}/>
          <Route exact path="/estudiante-nota/:id" component={EstudianteNotas} />
          <Route exact path="/estudiante-perfil/:id" component={PerfilEstudiante}/>

          {/* Rutas profesor */}
          <Route exact path="/profesor" component={Profesor} />
          <Route exact path="/profesor-grupos/:id" component={Grupos} />
          <Route exact path="/profesor-perfil/:id" component={Perfil} />
          <Route exact path="/profesor-grado-notas/:cod_grupo" component={Notas} />

          {/* Rutas Sing */}
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />

          {/* Rutas Admin */}
          <Route exact path="/administrado" component={Admin} />
          <Route exact path="/registro-grupo" component={RegistroGrupo} />
          <Route exact path="/ver-grupos" component={VerGrupos} />
          
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

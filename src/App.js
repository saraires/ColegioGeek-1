import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profesor from './Pages/ProfesorInicio';
import Grupos from './Pages/ProfesorGrupos';
import Perfil from './Pages/ProfesorPerfil';
import Notas from './Pages/ProfesorNotas';
import Layout from "./Components/Layout";
import Informe from "./Pages/Informe";
import Materias from "./Pages/Materias";
import Notas from "./Pages/Notas";
import Perfil from "./Pages/Perfil";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/informe-final" component={Informe} />
          <Route exact path="/materias" component={Materias} />
          <Route exact path="/notas" component={Notas} />
          <Route path="/perfil/:id" component={Perfil} />
          <Route exact path="/profesor" component={Profesor} />
          <Route exact path="/profesor-grupos" component={Grupos} />
          <Route exact path="/profesor-perfil" component={Perfil} />
          <Route exact path="/profesor-grado-notas" component={Notas} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

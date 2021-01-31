import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profesor from './Pages/ProfesorInicio';
import Grupos from './Pages/ProfesorGrupos';
import Perfil from './Pages/ProfesorPerfil';
import Notas from './Pages/ProfesorNotas';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/profesor" component={Profesor} />
          <Route exact path="/profesor-grupos" component={Grupos} />
          <Route exact path="/profesor-perfil" component={Perfil} />
          <Route exact path="/profesor-grado-notas" component={Notas} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;

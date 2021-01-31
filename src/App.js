import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
          <Route exact path="/perfil/:id" component={PerfilEstudiante} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

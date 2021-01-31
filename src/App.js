import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout";
import Informe from "./Pages/Informe";
import Materias from "./Pages/Materias";
import Notas from "./Pages/Notas";
import PerfilEstudiante from "./Pages/PerfilEstudiante";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/informe-final" component={Informe} />
          <Route exact path="/materias" component={Materias} />
          <Route exact path="/notas" component={Notas} />
          <Route path="/perfil/:id" component={PerfilEstudiante} />
           
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

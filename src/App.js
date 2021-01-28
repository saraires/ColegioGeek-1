import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profesor from './Pages/InicioProfesor';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/profesor" component={Profesor} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;

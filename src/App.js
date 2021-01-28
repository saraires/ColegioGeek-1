import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import inicioProfesor from './Pages/inicioProfesor';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/profesor" component={inicioProfesor} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;

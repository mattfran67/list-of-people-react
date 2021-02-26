import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Home } from './components/Home';

function App({ data }) {
  return (
    // Barra de Navegação
    <Router>
      <Switch>
        <Route exact path="/">
          <Home data={data} />
        </Route>
        <Route exact path="/cadastrarPessoa">
          {/* Cadastrar pessoa */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

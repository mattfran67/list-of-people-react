import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { AddPerson } from './components/AddPerson';

function App({ data }) {
  const [people, setPeople] = useState(data);

  const personAdded = person => setPeople([...people, person]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home data={people} />
        </Route>
        <Route exact path="/cadastrarPessoa">
          <AddPerson personAdded={personAdded} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

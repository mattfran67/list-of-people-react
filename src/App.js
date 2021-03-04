import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { AddPerson } from './components/AddPerson';
import { EditPerson } from './components/EditPerson';

function App({ data }) {
  const [people, setPeople] = useState(data);

  const personAdded = person => setPeople([...people, person]);

  const personEdited = personObj => {
    const updatedPeople = people.map(person => {
      return personObj.id ===  person.id ? { ...personObj } : person;
    });

    setPeople(updatedPeople);
  };

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
        <Route exact path="/editarPessoa/:personId">
          <EditPerson data={people} personEdited={personEdited} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

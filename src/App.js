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

      <div className="content card p-3 mt-3 text-center">
        <a href="https://br.freepik.com/vetores/pessoas">
          Pessoas vetor criado por skydesign - br.freepik.com
        </a>
      </div>
    </Router>
  );
}

export default App;

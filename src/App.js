import React, { useState } from 'react';
import { PersonInfo } from './components/PersonInfo';

function App({ data }) {
  const [selectedPerson, setSelectedPerson] = useState(data[0]);

  const peopleList = data.map((person, index) => (
    <li key={person.id} onClick={() => setSelectedPerson(data[index])} >
      {person.name}
    </li>
  ));

  return (
    <div className="content">
      <ul>
        {peopleList}
      </ul>

      <PersonInfo person={selectedPerson} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { PersonInfo } from './components/PersonInfo';
import { ShowContainer } from './components/ShowContainer';

function App({ data }) {
  const [selectedPerson, setSelectedPerson] = useState(data[0]);

  const peopleList = data.map((person, index) => (
    <li key={person.id} onClick={() => setSelectedPerson(data[index])} >
      {person.name}
    </li>
  ));

  return (
    <div className="content">
      <ShowContainer>
        <ul>
          {peopleList}
        </ul>
      </ShowContainer>

      <PersonInfo person={selectedPerson} />
    </div>
  );
}

export default App;

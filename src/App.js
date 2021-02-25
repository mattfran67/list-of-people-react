import React, { useState } from 'react';

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

      <div>
        <h3>{selectedPerson.name}</h3>
        <p>Data de Nascimento: {selectedPerson.birthday}</p>
        <p>Cidade: {selectedPerson.city}</p>
        <p>Estado: {selectedPerson.state}</p>
        <p>País: {selectedPerson.country}</p>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { PersonInfo } from './components/PersonInfo';
import { ShowContainer } from './components/ShowContainer';

function App({ data }) {
  const [selectedPerson, setSelectedPerson] = useState(data[0]);

  const peopleList = data.map((person, index) => (
    <li key={person.id} onClick={() => setSelectedPerson(data[index])}>
      {person.name}
    </li>
  ));

  return (
    <div className="content">
      <section className="right-float main">
        <PersonInfo person={selectedPerson} />
      </section>
      <aside className="right-float side-menu">
        <div className="card shadow">
          <ShowContainer title="Pessoas">
            <ul className="list">
              {peopleList}
            </ul>
          </ShowContainer>
        </div>
      </aside>
    </div>
  );
}

export default App;

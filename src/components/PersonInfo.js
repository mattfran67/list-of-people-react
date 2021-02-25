import React from 'react';

export function PersonInfo({ person }) {
  return (
    <div>
      <h3>{person.name}</h3>
      <p>Data de Nascimento: {person.birthday}</p>
      <p>Cidade: {person.city}</p>
      <p>Estado: {person.state}</p>
      <p>País: {person.country}</p>
    </div>
  );
} 
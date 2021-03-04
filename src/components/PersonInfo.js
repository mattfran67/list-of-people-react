import React from 'react';

export function PersonInfo({ person }) {
  return (
    <div className="card shadow">
      <h3 className="card-header header-color">{person.name}</h3>
      <div className="card-body">
        <p>Data de Nascimento: {person.birthday.toLocaleDateString()}</p>
        <p>Cidade: {person.city}</p>
        <p>Estado: {person.state}</p>
        <p>País: {person.country}</p>
      </div>
    </div>
  );
} 
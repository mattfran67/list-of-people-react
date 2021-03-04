import React from 'react';
import { Link } from 'react-router-dom';

export function PersonInfo({ person }) {
  return (
    <div className="card shadow">
      <h3 className="card-header header-color">{person.name}</h3>
      <div className="card-body">
        <p>
          <span className="text-secondary">Data de Nascimento: </span>
          {person.birthday.toLocaleDateString()}
        </p>
        <p>
          <span className="text-secondary">Cidade: </span>
          {person.city}
        </p>
        <p>
          <span className="text-secondary">Estado: </span>
          {person.state}
        </p>
        <p>
          <span className="text-secondary">País: </span>
          {person.country}
        </p>
      </div>
      <div className="card-footer">
        <Link to={`/editarPessoa/${person.id}`}>Editar pessoa</Link>
      </div>
    </div>
  );
} 
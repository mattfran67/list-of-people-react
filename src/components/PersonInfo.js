import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';

export function PersonInfo({ person }) {
  return (
    <div className="card shadow">
      <div className="card-header">
        <Avatar
          diameter={75}
          avatar={person.avatar}
        />
        <h4 className="card-text person-name">{person.name}</h4>
      </div>
      <div className="card-body">
        <p className="card-text">
          <span className="text-secondary">Data de Nascimento: </span>
          {person.birthday.toLocaleDateString()}
        </p>
        <p className="card-text">
          <span className="text-secondary">Cidade: </span>
          {person.city}
        </p>
        <p className="card-text">
          <span className="text-secondary">Estado: </span>
          {person.state}
        </p>
        <p className="card-text">
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
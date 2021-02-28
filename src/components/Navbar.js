import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <div className="content">
        <Link to="/">Listar pessoas</Link>
        <Link to="/cadastrarPessoa">Cadastrar pessoa</Link>
      </div>
    </nav>
  );
}
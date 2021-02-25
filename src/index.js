import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// lista de pessoas
import { people } from './data';

ReactDOM.render(
  <React.StrictMode>
    <App data={people} />
  </React.StrictMode>,
  document.getElementById('root')
);

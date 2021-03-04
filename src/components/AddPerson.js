import { nanoid } from 'nanoid';
import React, { useState } from 'react';

export function AddPerson({ personAdded }) {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const onNameChange = ({ target }) => setName(target.value); 
  const onBirthdayChange = ({ target }) => {setBirthday(target.value)}; 
  const onCityChange = ({ target }) => setCity(target.value); 
  const onStateChange = ({ target }) => setState(target.value); 
  const onCountryChange = ({ target }) => setCountry(target.value); 

  const handleSubmit = e => {
    e.preventDefault();
    const person = { name, city, state, country };
    const [year, month, day] = birthday.split('-');
    person.birthday = new Date(year, month - 1, day);
    person.id = nanoid();

    personAdded(person);

    setName('');
    setBirthday('');
    setCity('');
    setState('');
    setCountry('');
  };

  return (
    <div className="content">
      <form className="card p-md-5 p-2 shadow" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={onNameChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthday">Data de Nascimento:</label>
          <input
            id="birthday"
            type="date"
            value={birthday}
            onChange={onBirthdayChange}
            className="form-control"
            min="1900-01-01"
            max={new Date().toISOString().slice(0, 10)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Cidade:</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={onCityChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">Estado:</label>
          <input
            id="state"
            type="text"
            value={state}
            onChange={onStateChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">País:</label>
          <input
            id="country"
            type="text"
            value={country}
            onChange={onCountryChange}
            className="form-control"
            required
          />
        </div>
        <button className="btn btn-primary">Cadastrar pessoa</button>
      </form>
    </div>
  );
}
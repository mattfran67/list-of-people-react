import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { AvatarSelector } from './AvatarSelector';

export function EditPerson({ data, personEdited }) {
  const { personId } = useParams();
  const history = useHistory();

  let person = data.find(person => person.id === personId);
  person = person ? person : data[0];

  const [name, setName] = useState(person.name);
  const [birthday, setBirthday] = useState(
    person.birthday.toISOString().slice(0, 10)
  );
  const [city, setCity] = useState(person.city);
  const [state, setState] = useState(person.state);
  const [country, setCountry] = useState(person.country);

  const [avatarNum, setAvatarNum] = useState(person.avatar);

  const onNameChange = ({ target }) => setName(target.value);
  const onBirthdayChange = ({ target }) => setBirthday(target.value);
  const onCityChange = ({ target }) => setCity(target.value);
  const onStateChange = ({ target }) => setState(target.value);
  const onCountryChange = ({ target }) => setCountry(target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const [year, month, day] = birthday.split('-');
    personEdited({
      id: personId,
      name,
      avatar: avatarNum,
      birthday: new Date(year, month - 1, day),
      city,
      state,
      country
    });
    history.push('/');
  }

  return (
    <div className="content" onSubmit={handleSubmit}>
      <form className="card p-md-5 p-2 shadow">
        <AvatarSelector
          avatarNum={avatarNum}
          setAvatarNum={setAvatarNum}
        />
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
        <button className="btn btn-primary">Editar pessoa</button>
      </form>
    </div>
  );
}
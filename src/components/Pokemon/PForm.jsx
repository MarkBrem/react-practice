import { Component, useState } from 'react';
import s from './Form.module.css';

export const PForm = ({ onName }) => {
  const [pokemonName, setPokemonName] = useState('');

  const onHandleChange = e => {
    setPokemonName(e.currentTarget.value);
  };

  const handleName = e => {
    e.preventDefault();
    onName(pokemonName);
  };

  return (
    <form className={s.form} onSubmit={handleName} action="">
      <input
        className={s.inp}
        value={pokemonName}
        onChange={onHandleChange}
        type="text"
      />
      <button className={s.btn} type="submit">
        Надіслати
      </button>
    </form>
  );
};

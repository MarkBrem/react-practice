import { Component, useState } from 'react';

export const Form = () => {
  const [emailChange, setEmailChange] = useState('');
  const [nameChange, setNameChange] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    setEmailChange(e.currentTarget.elements.email.value );
    setNameChange(e.currentTarget.elements.name.value );
  };
  const handleChange = e => {
    setEmailChange(e.target.value);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <h1>Вітаю</h1>
      <input
        name="email"
        value={emailChange}
        type="email"
        placeholder="Напишіть свій email"
        onChange={handleChange}
      />
      <input name="name" type="text" />
      <button type="submit">Надіслати</button>
    </form>
  );
};

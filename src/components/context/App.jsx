import React, { useState, useContext } from 'react';
import { Button } from './Context1';
import { Message } from './Context2';

export const Context = React.createContext();

export const App2 = () => {
  const [show, setShow] = useState(false);

  return (
    <Context.Provider value={{ show, setShow }}>
      <Button />
      <Message />
    </Context.Provider>
  );
};

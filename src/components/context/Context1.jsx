import { useContext } from 'react';
import { Context } from './App';

export const Button = () => {
  const cba = useContext(Context);
  return (
    <button
      onClick={() => {
        cba.setShow(prevState => !prevState);
      }}
    >
      Click
    </button>
  );
};

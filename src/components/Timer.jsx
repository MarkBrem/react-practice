import { useEffect, useRef, useState } from 'react';

export const Timer = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null)
  console.log(timerRef);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => {
      stop();
    };
  }, [time]);

  const stop = () => {
    
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <p>{time}</p>
      <button onClick={stop}>Зупинити таймер</button>
    </div>
  );
};

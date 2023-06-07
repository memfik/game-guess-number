import React, { useState } from 'react';
import s from './game.module.css';
const Game = () => {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [message, setMessage] = useState('???');
  const [guess, setGuess] = useState('');
  const [count, setCount] = useState(0);
  const handleGuess = () => {
    const guessedNumber = parseInt(guess);
    if (guessedNumber === randomNumber) {
      setMessage('Вы угадали число!!!');
      setCount(count + 1);
    } else if (guessedNumber > randomNumber) {
      setMessage('Загаданное число меньше');
      setCount(count + 1);
    } else if (guessedNumber < randomNumber) {
      setMessage('Загаданное число больше');
      setCount(count + 1);
    }
    setGuess('');
  };
  const reset = () => {
    setMessage('???');
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setCount(0);
  };
  return (
    <div className={s.container}>
      <div className={s.gamebox}>
        <h1 className={s.header}>Угадай число от 0 до 100</h1>
        <p className={s.message}>{message}</p>
        <input
          className={s.input}
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button className={s.check} onClick={handleGuess}>
          Проверить{' '}
        </button>
        <button className={s.reset} onClick={reset}>
          Заново
        </button>
        <hr />
        <p className={s.count}>Количество попыток:{count}</p>
      </div>
    </div>
  );
};
export default Game;

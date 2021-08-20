import React from 'react';
import s from './Feedback.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={s.controls}>
    <button type={s.button} onClick={onIncrement}>
      Good
    </button>
    <button type={s.button} onClick={onIncrement}>
      Neutral
    </button>
    <button type={s.button} onClick={onIncrement}>
      Bad
    </button>
  </div>
);

export default Controls;

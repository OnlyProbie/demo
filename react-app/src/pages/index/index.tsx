import React from 'react';
import './index.css';

type IState = {
  date: Date
}

export default function () {
  const len = 3000;
  return (
    <ul>
      {Array(len).fill(0).map((_, i) => <li>{i}</li>)}
    </ul>
  )
}



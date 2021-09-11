import React from 'react';
import logo from './logo.svg';
import './App.css';
import robotsData from './mock/robots.json';
import Robots from './components/Robot';

function App() {
  return (
    <ul>
      {robotsData.map(({
        id,
        name,
        email,
      }) => <Robots key={id} id={id} name={name} email={email} />)}
    </ul>
  );
}

export default App;

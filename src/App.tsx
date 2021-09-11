import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robotsData from './mock/robots.json';
import Robots from './components/Robot';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>Online Shopping</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robotsData.map(({
          id,
          name,
          email,
        }) => <Robots key={id} id={id} name={name} email={email} />)}
      </div>
    </div>
  );
}

export default App;

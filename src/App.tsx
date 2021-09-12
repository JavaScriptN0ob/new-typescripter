import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robotsData from './mock/robots.json';
import Robots from './components/Robot';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

const App: React.FC = (props) => {
  const [robotGallery, setRobotGallery] = useState<any>([]);

  useEffect(() => {
    const getRobotGallery = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json();
  
      setRobotGallery(data);
    }
    
    getRobotGallery();
  }, []);


  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>Online Shopping</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robotGallery.map(({
          id,
          name,
          email,
        }) => <Robots key={id} id={id} name={name} email={email} />)}
      </div>
    </div>
  );
}

export default App;

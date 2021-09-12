import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robotsData from './mock/robots.json';
import Robots from './components/Robot';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

// interface State {
//   robotGallery: any[];
//   loading: boolean;
// }

const App: React.FC = (props) => {
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getRobotGallery = async () => {
      setLoading(true);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
    
        setRobotGallery(data);
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
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
      {(!error || error !== '') && <div>Error occurs: {error}</div>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map(({
            id,
            name,
            email,
          }) => <Robots key={id} id={id} name={name} email={email} />)}
        </div>
      ) : (
        <h2>loading</h2>
      )
      }
    </div>
  );
}

export default App;

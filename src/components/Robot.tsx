import React from 'react';
import styles from './Robot.module.css';

interface RobotProps {
  id: number,
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({
  id,
  name,
  email,
}) => {
  return (
    <div className={styles.cardContainer}>
      <img alt="alt" src={`https://robohash.org/wayne?set=set${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Robot;
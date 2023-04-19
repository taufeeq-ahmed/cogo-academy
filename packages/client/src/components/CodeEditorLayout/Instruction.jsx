import React from 'react'
import styles from './styles.module.css'
const Instruction = ({ instruction }) => {
  return (
    <div className={styles.instruction}>
      <p>{instruction}</p>
    </div>)
};

export default Instruction;
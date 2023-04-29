import React from 'react'
import styles from './styles.module.css'
const Instruction = ({ instruction }) => {
  return (
    <div className={styles.instruction}>
      <p dangerouslySetInnerHTML={{__html: instruction}}/>
      <hr />
    </div>)
};

export default Instruction;
import React from 'react'
import styles from './styles.module.css'


const Button = ({ text = '', btnStyle = {}, disabled = false, onClick = {}, id }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`${styles.btn} ${disabled ? styles.disabled_btn : ""}`} style={btnStyle} id={id} type="button" >
      <span>{text}</span>
    </button >
  )
}

export default Button;
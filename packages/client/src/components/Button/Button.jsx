import React from 'react'
import styles from './styles.module.css'

const Button = ({ text, btnStyle, disabled, onClick }) => {
  return (
      <button onClick={onClick} disabled={disabled} className={`${styles.btn} ${disabled ? styles.disabled_btn : ""}`} style={btnStyle} >
          <span>{text}</span>
      </button>
  )
}

export default Button
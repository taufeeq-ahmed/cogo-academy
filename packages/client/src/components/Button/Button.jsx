import React from 'react'
import styles from './styles.module.css'


const Button = ({ text = '', btnStyle = {}, disabled = false, onClick = () => { }, id, className = "", type = 'button', loading = false }) => {
  if (loading) disabled = true;
  return (
    <button onClick={onClick} disabled={disabled} className={`${className} ${styles.btn} ${disabled ? styles.disabled_btn : ""}`} style={btnStyle} id={id} type={type} >
      {
        (loading) ? (
          <>
            <i class="fa fa-circle-o-notch fa-spin"></i>
            <span>Loading</span>
          </>

        ) : (
          <span>{text}</span>
        )
      }

    </button >
  )
}

export default Button;

import React from 'react'
import './styles.css'


const Button = ({ btnType = "primary", text = '', btnStyle = {}, disabled = false, onClick = () => { }, id, className = "", type = 'button' }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={`${className} btn ${disabled ? "disabled_btn" : ""} ${btnType === "secondary" ? "secondary_btn" : ""}`} style={btnStyle} id={id} type={type} >
      <span>{text}</span>
    </button >
  )
}

export default Button;
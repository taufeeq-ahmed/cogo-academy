import React from 'react'
import './styles.css'


const Button = ({ btnType = "primary", text = '', btnStyle = {}, disabled = false, onClick = () => { }, id, className = "", type = 'button', loading = false }) => {
  if (loading) disabled = true;
  return (
    <button onClick={onClick} disabled={disabled} className={`${className} btn ${disabled ? "disabled_btn" : ""}`} style={btnStyle} id={id} type={type} >
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

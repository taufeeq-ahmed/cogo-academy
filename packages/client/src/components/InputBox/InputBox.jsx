import React from 'react'
import "./styles.css"

const InputBox = ({ icon = '', value, setValue = () => { }, placeholder, textarea = false, style = {}, style_box = {}, rows = 6, name, register = () => { }, registerQuery = '', type, ...rest }) => {
    return (
        <div className="input_box" style={style_box}>
            {icon !== '' && <img src={icon} alt="search-icon" />}
            {(textarea) ? (
                <textarea
                    autoComplete='off'
                    className="input_textarea"
                    type="text"
                    id="textarea-bar"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e)}
                    style={style}
                    rows={rows}
                    name={name}
                    {...register(registerQuery)}
                    {...rest}
                />
            ) : (
                <input
                    className="input"
                    type={type}
                    id="input-bar"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e)}
                    style={style}
                    autoComplete='off'
                    name={name}
                    {...register(registerQuery)}
                    {...rest}
                // {...register(name)}
                />
            )}
        </div>
    )
}
export default InputBox;



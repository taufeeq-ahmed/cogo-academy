import React from 'react'
import styles from "./styles.module.css"

const InputBox = ({ icon = '', value, setValue, placeholder, textarea = false, style = {}, rows = 6, name, register = {}, registerQuery = '', ...rest }) => {
    return (
        <div className={styles.input_box}>
            {icon !== '' && <img src={icon} alt="search-icon" />}
            {(textarea) ? (
                <textarea
                    className={styles.input_textarea}
                    type="text"
                    id="textarea-bar"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e)}
                    style={style}
                    rows={rows}
                    name={name}
                    // {...register(registerQuery)}
                    {...rest}
                />
            ) : (
                <input
                    className={styles.input}
                    type="text"
                    id="input-bar"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e)}
                    style={style}
                    name={name}
                    // {...register(registerQuery)}
                    {...rest}
                // {...register(name)}
                />
            )}
        </div>
    )
}
export default InputBox;



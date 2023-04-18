import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./styles.module.css"
import PropTypes from 'prop-types';
import CloseSVG from '/assets/delete.svg'


const Toast = ({ isShowing, text }) => {

    return isShowing ?
        ReactDOM.createPortal(
            <div className={styles.toast}>
                {text}
                <span><img src={CloseSVG} alt='close-icon' /> </span>
            </div>
            ,
            document.body
        )
        : null;
};

Toast.propTypes = {
    isShowing: PropTypes.bool.isRequired,
    text: PropTypes.bool.isRequired
};

export default Toast;

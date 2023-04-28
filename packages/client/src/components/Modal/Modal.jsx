import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from "./styles.module.css"
import Button from '../Button/Button'
import cross from '/assets/cross.svg';
const Modal = ({ size = "small", isShowing, toggle, children, heading, handleSubmit = null, submitText = "Submit" }, modalStyles) => {
    const modalClassName = `${styles.modal} ${isShowing ? 'is-active' : ''}`;

    return isShowing
        ? ReactDOM.createPortal(
            <div className={modalClassName}  >
                <div className={`${styles.modal_box} ${size === "small" ? styles.modal_small : styles.modal_big}`} style={modalStyles}>
                    <div className={styles.modal_header} style={size === "small" ? {} : { boxShadow: "0px 0px 4px rgba(44, 62, 80, 0.2)" }}>
                        <span>{heading}</span>
                        <div className={styles.cls_btn} onClick={toggle}>
                            <img src={cross} text='Close' />
                        </div>
                    </div>
                    <div style={size === "small" ? { padding: "16px" } : { padding: "16px 24px" }} className={styles.modal_content}>{children}</div>
                    <div className={styles.modal_footer} style={size === "small" ? {} : { boxShadow: "0px 0px 8px rgba(44, 62, 80, 0.2)" }} >
                        {handleSubmit !== null && <Button onClick={handleSubmit} text={submitText} />}
                    </div>
                </div>
            </div >,
            document.body
        )
        : null;
};

Modal.propTypes = {
    isShowing: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    heading: PropTypes.node.isRequired
};

export default Modal;

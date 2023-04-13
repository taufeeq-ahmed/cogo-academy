import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from "./styles.module.css"
import Button from '../Button/Button'
const Modal = ({ isShowing, toggle, children, heading }) => {
    const modalClassName = `${styles.modal} ${isShowing ? 'is-active' : ''}`;

    return isShowing
        ? ReactDOM.createPortal(
            <div className={modalClassName}>
                <div className={styles.modal_box}>
                    <div className="modal-background" onClick={toggle} />
                    <div className={styles.modal_header}>{heading}</div>
                    <div className={styles.modal_content}>{children}</div>
                    <div className={styles.modal_footer}>
                        <Button onClick={toggle} text='Close' />
                    </div>
                </div>
            </div>,
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

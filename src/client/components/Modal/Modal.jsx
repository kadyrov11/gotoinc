import React, { useEffect } from 'react'
import { createPortal } from 'react-dom';

import styles from './Modal.module.scss';

const modalRoot = document.getElementById('modal-root')

function Modal({ children, handleClose }) {
    const onKeydownClose = (e) => {
        if (e.code === 'Escape') {
            handleClose()
        }
    }
    useEffect(() => { 
        window.addEventListener('keydown', onKeydownClose)
        return () =>   window.removeEventListener('keydown',onKeydownClose) 
    }, [])
    
    const onClose = (e) => {
        if (e.currentTarget === e.target) {
            handleClose()
        }
    }

    return createPortal(
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalWindow}>
                {children}
            </div>
        </div>,
        modalRoot)
}

export default Modal
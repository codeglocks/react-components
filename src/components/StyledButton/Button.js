import React from 'react';
import styles from './button.module.css';

const ButtonCreative = ({ children, onClick, btnColor = 'teal', labelColor, disabled, type, style, ...props }) => {
    return (
        <button
            className={styles.btn}
        >
            {children || 'label'}
        </button>
    );
};

export default ButtonCreative;
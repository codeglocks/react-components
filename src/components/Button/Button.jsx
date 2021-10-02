import React from 'react';

const Button = ({ title = 'Button', onClick, styles, className, disabled }) => {
	return <button>{title}</button>;
};

export default Button;

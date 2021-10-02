import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.scss';

const Button = ({
	title,
	type,
	onClick,
	styles,
	className,
	disabled,
	...props
}) => {
	const getClassName = () => {
		let dynamicClassName = `button button-${
			disabled && !type.includes('disabled') ? type + '-disabled' : type
		}`;
		if (className) {
			dynamicClassName += ` ${className}`;
		}
		return dynamicClassName;
	};
	return (
		<button
			className={getClassName()}
			style={styles}
			disabled={disabled}
			onClick={onClick}
			{...props}>
			{title}
		</button>
	);
};

PropTypes.Button = {
	title: PropTypes.string,
	onClick: PropTypes.func,
	styles: PropTypes.object,
	className: PropTypes.string,
	disabled: PropTypes.bool
};

Button.defaultProps = {
	title: 'Button',
	type: '',
	disabled: false
};

export default Button;

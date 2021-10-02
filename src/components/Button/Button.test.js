import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button Layout', () => {
	it('renders without crashing', () => {
		const { container } = render(<Button title='click' />);
		const button = container.querySelector('button');
		expect(button).toBeInTheDocument();
	});

	it('renders with title', () => {
		const { getByText } = render(<Button title='click me' />);
		const button = getByText('click me');
		expect(button).toBeInTheDocument();
	});

	it('render with default title when title is not provided', () => {
		const { getByText } = render(<Button />);
		const button = getByText('Button');
		expect(button).toBeInTheDocument();
	});

	it('renders with default className', () => {
		const { container } = render(<Button title='click' />);
		const button = container.querySelector('button');
		expect(button).toHaveClass('button');
	});

	it('renders with custom className', () => {
		const { container } = render(
			<Button title='click' className='custom-class' />
		);
		const button = container.querySelector('button');
		expect(button).toHaveClass('custom-class');
	});

	it('renders with custom style', () => {
		const { container } = render(
			<Button title='click' style={{ color: 'red' }} />
		);
		const button = container.querySelector('button');
		expect(button).toHaveStyle('color: red');
	});
});

describe('Button Events', () => {
	it('does not respond to click event when onClick function is provided', () => {
		const onClick = jest.fn();
		const { container } = render(<Button title='click' />);
		const button = container.querySelector('button');
		button.click();
		expect(onClick).not.toHaveBeenCalled();
	});

	it('triggers when there is a onClick function provided', () => {
		const onClick = jest.fn();
		const { container } = render(
			<Button title='click' onClick={onClick} />
		);
		const button = container.querySelector('button');
		button.click();
		expect(onClick).toHaveBeenCalled();
	});
});

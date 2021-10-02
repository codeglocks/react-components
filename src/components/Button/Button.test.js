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
});

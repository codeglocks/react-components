import React from 'react';
import { render , screen, fireEvent} from '@testing-library/react';
import ToggleSwitch from './toggle';

describe('Toggle Button Layout', () => {
	it('renders without crashing', () => {
		const { container } = render(<ToggleSwitch />);
		const toggleButton = container.querySelector('button');
		expect(toggleButton).toBeInTheDocument();
	});

    it('renders on/off properly', () => {
		const { container } = render(<ToggleSwitch />);
		const toggleButton = container.querySelector('button');
        fireEvent.click(toggleButton)
        expect(screen.getByText('SwitchedOn')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByText('SwitchedOff')).toBeInTheDocument()
	});

	
});

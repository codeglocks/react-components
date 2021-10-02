import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app without crashing', () => {
	render(<App />);
	const linkElement = screen.getByText(/components showcase/i);
	expect(linkElement).toBeInTheDocument();
});

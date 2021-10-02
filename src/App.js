import React from 'react';
import './App.css';
import ToggleSwitch from './components/Toggle/toggle';
import Button from './components/Button/Button';

function App() {
	return (
		<div>
			<h1>Components showcase</h1>
			<Button title='Click me' />
			<ToggleSwitch />
		</div>
	);
}

export default App;

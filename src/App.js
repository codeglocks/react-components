import React from 'react';
import './App.css';
import ToggleSwitch from './components/Toggle/toggle';
import Button from './components/Button/Button';
import ButtonCreative from './components/StyledButton/Button';

function App() {
	return (
		<div>
			<h1>Components showcase</h1>
			<Button title='Click me' />
			<ToggleSwitch />
			<ButtonCreative children="New Button"/>
		</div>
	);
}

export default App;

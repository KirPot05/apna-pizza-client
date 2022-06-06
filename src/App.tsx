import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import Private from './components/Private';
import Register from './components/Register';
import Login from './components/Login';

function App() {
	return (
		<div>
			<Header/>

			<Routes>
				<Route path='/' element={<Container/>} />
				<Route path='/cart' element={<Private/>} />
				<Route path='/register' element={<Register/>} />
				<Route path='/login' element={<Login/>} />
			</Routes>
			
		</div>
	);
}

export default App;

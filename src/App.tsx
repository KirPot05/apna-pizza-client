import React from 'react';
import Cover from './components/Cover';
import Header from './components/Header';
import IngredientsContainer from './components/IngredientsContainer';

function App() {
	return (
		<div >
			<Header/>
			<div>
				<Cover/>
				<IngredientsContainer/>
			</div>
		</div>
	);
}

export default App;

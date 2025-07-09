import logo from './logo.svg';
import { useState } from 'react';
import "./App.css"
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

	// Make the State Value called value which Can be update using setValue
	// A Variable which can be Used in the DOM and can be change 
	const [value, setValue] = useState(0); // Value is Zero
	return (
		<div className="App">
			<NavBar logoText = "Tirth Patel"/>
			<div className="box">
				{value}
			</div>
			<button onClick={()=>{setValue(value+1)}}>
				Click
			</button>
			<Footer />
		</div>
	);
}

export default App;

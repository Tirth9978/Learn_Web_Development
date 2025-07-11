import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [count,setValue] = useState(10)

	return (
		<>
			<div>
				Count is {count}
			</div>
			<button onClick={()=>{setValue(count * 1000)}}>Update the Count</button>
		</>
	)
}

export default App

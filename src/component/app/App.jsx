import { Routes, Route, Link } from 'react-router-dom';
import About from '../about/About';
import './App.css';
function App() {
	return (
		<>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Routes>
				<Route path='about' element={<About />} />
			</Routes>
		</>
	);
}

export default App;

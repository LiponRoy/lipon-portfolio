import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarTwo from './component/Navbar/NavbarTwo';
import Home from './component/page/Home';

function App() {
	return (
		<div className='App'>
			<NavbarTwo></NavbarTwo>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;

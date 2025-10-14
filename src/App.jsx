import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from 'react-router'
import Homepage from "./pages/Homepage";
import PortfolioPage from "./pages/PortfolioPage";

import './styles/App.scss';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage/>}></Route>
				<Route path='/portfolio' element={<PortfolioPage/>}></Route>
			</Routes>
		</div>
	);
}

export default App;

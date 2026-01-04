import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from 'react-router'
import Homepage from "./pages/Homepage";

import './styles/App.scss';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path='/' element={<Homepage/>}></Route>
			</Routes>
		</div>
	);
}

export default App;

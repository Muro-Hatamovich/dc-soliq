import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";

// pages
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about-us" element={<About />} />
					<Route path="/services" />
					<Route path="/news" />
					<Route path="/contacts" />
					<Route path="*" />
				</Routes>
			</Router>
		</div>
	);
};

export default App;

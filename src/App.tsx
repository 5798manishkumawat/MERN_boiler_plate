import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import SignUp from "./components/SignUp/SignUp";

function App() {
	return (
		<Router>
			<Route path="/" component={SignUp} />
		</Router>
	);
}

export default App;

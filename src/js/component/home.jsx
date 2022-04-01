import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="row">
				<Jumbotron />
			</div>
		</div>
	);
};

export default Home;

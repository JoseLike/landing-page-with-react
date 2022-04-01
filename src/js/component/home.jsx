import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="row">
				<Jumbotron />
			</div>
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;

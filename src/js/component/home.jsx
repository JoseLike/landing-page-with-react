import React from "react";
import Jumbotron from "/workspace/landing-page-with-react/src/js/component/jumbotron.jsx";
import Navbar from "/workspace/landing-page-with-react/src/js/component/navbar.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
		</div>
	);
};

export default Home;

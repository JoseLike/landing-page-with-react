import React from "react";
import Navbar from "/workspace/landing-page-with-react/src/js/component/navbar.jsx";
import Jumbotron from "/workspace/landing-page-with-react/src/js/component/jumbotron.jsx";
import Cards from "/workspace/landing-page-with-react/src/js/component/cards.jsx";
import Footer from "/workspace/landing-page-with-react/src/js/component/footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="row">
				<Jumbotron />
			</div>
			<div className="container mt-4">
				<div className="row">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<div className="row mt-4">
				<Footer />
			</div>
		</div>
	);
};

export default Home;

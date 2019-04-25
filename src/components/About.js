import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "@reach/router";

const About  = () => (
	<div>
		<Nav/>
		<div className="page-wrap">
			<div className="page-wrap">
				<div className="jumbotron">
					<h1 className="display-3">About Us</h1>
					<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque distinctio facere reprehenderit sunt. Dicta dolores esse magni nemo, odit porro? Blanditiis corporis et eum excepturi nam odit qui tempora.</p>
					<hr className="my-4"/>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi error fugit illum minus, necessitatibus quod sunt. Ad assumenda consequuntur corporis culpa earum libero maxime nisi placeat, porro, quaerat quod, velit!</p>
					<p className="lead">
						<Link className="btn btn-primary btn-lg" to="/about" >Learn more</Link>
					</p>
				</div>
			</div>
		</div>
		<Footer/>
	</div>
);

export default About;

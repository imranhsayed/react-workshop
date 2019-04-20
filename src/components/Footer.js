import React from 'react';
import { Link } from "@reach/router";

const Footer = () => {
	return (
		// Site footer
		<footer className="site-footer">
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-md-6">
						<h6>About</h6>
						<p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
					</div>

					<div className="col-xs-6 col-md-3">
						<h6>Categories</h6>
						<ul className="footer-links">
							<li><a href="http://scanfcode.com/category/c-language/">C</a></li>
							<li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
							<li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
							<li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
							<li><a href="http://scanfcode.com/category/android/">Android</a></li>
							<li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
						</ul>
					</div>

					<div className="col-xs-6 col-md-3">
						<h6>Quick Links</h6>
						<ul className="footer-links">
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/contact-us">Contact Us</Link></li>
						</ul>
					</div>
				</div>
				<hr/>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-sm-6 col-xs-12">
						<p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
							<a href="#">Scanfcode</a>.
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
};

export default Footer

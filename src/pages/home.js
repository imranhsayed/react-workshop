import React from 'react';
import Layout from '../components/layout';
import Movies from '../components/movies';

const Home = () => {
  return (
    <Layout>
      <div id="hero" className="Hero"
           data-reactid=".0.1">
        <div className="content" data-reactid=".0.1.0">
          <img className="logo"
               src="http://www.returndates.com/backgrounds/narcos.logo.png"
               alt="" data-reactid=".0.1.0.0"/>
          <h2>Season 2 now available</h2>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis
            quod.
          </p>
          <div className="button-wrapper">
            <a href="#" className="Button">Watch now</a>
            <a href="#" className="Button">My list</a>
          </div>
        </div>
      </div>
      <Movies/>
    </Layout>
  );
};

export default Home;

import React from 'react';

import NetflixBackgroundImage from '../images/netflix-background.png';
import Layout from '../components/layout';
import Movies from '../components/movies';

const Home = () => {
  return (
    <Layout>
      <div id="hero" className="hero">
        <div className="content">
          <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png"/>
          <h2>Season 2 now available</h2>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis
            quod.
          </p>
          <div className="button-wrapper">
            <a href="#" className="button-el">Watch now</a>
            <a href="#" className="button-el">My list</a>
          </div>
        </div>
        <div className="overlay" style={{background: `url(${NetflixBackgroundImage})`}}/>
      </div>
      <Movies/>
    </Layout>
  );
};

export default Home;

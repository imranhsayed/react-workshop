import React from 'react';
import Header from './header';
import NetflixBackgroundImg from '../../images/netflix-background.png';

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <img src={NetflixBackgroundImg} alt=""/>
    </div>
  )
}

export default Layout

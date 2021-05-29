import React from 'react';
import Header from './header';
import Hero from './hero';

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <Hero/>
      <div className="max-w-screen-xl m-auto mt-12">
        {children}
      </div>
    </div>
  )
}

export default Layout

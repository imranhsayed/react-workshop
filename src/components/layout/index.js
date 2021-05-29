import React from 'react';
import Header from './header';

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default Layout

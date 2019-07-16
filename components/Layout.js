import React, { Fragment } from 'react';
import Footer from './Footer';
import NavBar from './Navbar';

export default function Layout({ children }) {
  return (
    <Fragment>
      <NavBar />
      {children}
      <Footer />
    </Fragment>
  );
}

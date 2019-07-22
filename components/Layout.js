import React, { Fragment } from 'react';

import Footer from './Footer';
import NavBar from './Navbar';

const Layout = ({ children, pathname }) => {
  return (
    <Fragment>
      <NavBar pathname={pathname} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default (Layout);

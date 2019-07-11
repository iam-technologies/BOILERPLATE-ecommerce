import React, { Fragment } from 'react';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Fragment>
      {children}
      <Footer />
    </Fragment>
  );
}

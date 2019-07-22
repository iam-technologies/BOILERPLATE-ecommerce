import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import Footer from './Footer';
import NavBar from './Navbar';
// import api from '../serverServices/api';
// import { isLoginActs, userActs } from '../redux/actions';


// const { change } = isLoginActs;
// const { getUser } = userActs;

const Layout = ({ children, pathname/* , change, getUser */ }) => {
  // useEffect(() => {
  //   api.account.onLogin((error, resLogin) => {
  //     change(resLogin || !error);

  //     if (resLogin) getUser();
  //   });
  // }, []);

  return (
    <Fragment>
      <NavBar pathname={pathname} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default connect(null/* , { change, getUser } */)(Layout);

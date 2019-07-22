import React, { useEffect, useState, Fragment } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';

import api from '../serverServices/api';
import { isLoginActs, userActs } from '../redux/actions';
// import LoginTo from './Account/Login/LoginTo';
// import MyAccount from './MyAccount';
// import Profile from './MyAccount/Profile';
// import OrderList from './MyAccount/OrderList';
// import Address from './MyAccount/Address';
// import Order from './MyAccount/Order';
// import Favourites from './MyAccount/Favourites';

const { change } = isLoginActs;
const { getUser } = userActs;
const PrivateRoute = ({ isLogin, isServer, pathname, change, getUser }) => {
  const [isClient, setclient] = useState(!isServer);

  useEffect(() => {
    api.account.onLogin((error, resLogin) => {
      change(resLogin || !error);

      if (resLogin) getUser();
      setclient(true);
    });
  }, []);

  if (!isClient) return <div>loading...</div>; // TODO (maybe use Layout)
  if (!isLogin) Router.push('/'); // user is send to the home page
  return <div>this is a private route...</div>;
  // switch (pathname) {
  //   case '/my-account':
  //     return <MyAccount />;
  //   case '/addresses':
  //     return <Address />;
  //   case '/profile':
  //     return <Profile />;
  //   case '/orders':
  //     return <OrderList />;
  //   case '/favourites':
  //     return <Favourites />;
  //   default:
  //     return Router.push('/');
  // }
};

function mapStateToProps(state) {
  const { isLogin: { login } } = state;

  return { isLogin: login };
}

export default connect(mapStateToProps, { change, getUser })(PrivateRoute);

import React, { useEffect, useState, Fragment } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';

import api from '../serverServices/api';
import { isLoginActs, userActs } from '../redux/actions';
// import LoginTo from './Account/Login/LoginTo';
import MyAccount from './MyAccount';
import Profile from './MyAccount/Profile';
import OrderList from './MyAccount/OrderList';
import Address from './MyAccount/Address';
// import Order from './MyAccount/Order';
import Favourites from './MyAccount/Favourites';

const { change } = isLoginActs;
const { getUser } = userActs;
const PrivateRoute = ({ isLogin, isServer, pathname, change, getUser }) => {
  const [isClient, setclient] = useState(!isServer);

  useEffect(() => {
    if (isLogin) return;

    api.account.onLogin((error, resLogin) => {
      if (!resLogin) return Router.push('/');

      change(resLogin || !error);

      if (resLogin) getUser();
      setclient(true);
    });
  }, []);

  if (!isClient) return <div>loading...</div>; // TODO (maybe use Layout)

  switch (pathname) {
    case '/my-account':
      return <MyAccount />;
    case '/addresses':
      return <Address />;
    case '/profile':
      return <Profile />;
    case '/orders':
      return <OrderList />;
    case '/favourites':
      return <Favourites />;
    default:
      return <div>this is a private route...</div>;
  }
};

function mapStateToProps(state) {
  const { isLogin: { login } } = state;

  return { isLogin: login };
}

PrivateRoute.displayName = 'PrivateRoute';

export default connect(mapStateToProps, { change, getUser })(React.memo(PrivateRoute));

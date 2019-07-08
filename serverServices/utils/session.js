import cookies from 'cookies-js';

import configApi from '../config';

cookies(window);
cookies.defaults = {
  domain: configApi.cookiesDomain || undefined,
  expires: configApi.cookiesExpires || 2592000,
  path: configApi.cookiesPath || '/',
  secure: configApi.cookiesSecure || false
};


const add = ({ authToken, userId }) => {
  if (cookies.enabled) {
    cookies.set('authToken', authToken);
    cookies.set('userId', userId);

    return;
  }

  // if cookies is disabled
  if ('localStorage' in window && window.localStorage !== null) {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('userId', userId);
  }
};


const get = () => {
  const sessionData = {};

  if (cookies.enabled) {
    sessionData.authToken = cookies.get('authToken');
    sessionData.userId = cookies.get('userId');

    return sessionData;
  }

  // if cookies is disabled
  if ('localStorage' in window && window.localStorage !== null) {
    if (localStorage.authToken && localStorage.userId) {
      sessionData.authToken = localStorage.authToken;
      sessionData.userId = localStorage.userId;

      return sessionData;
    }
  }

  return sessionData;
};


const remove = () => {
  if (cookies.enabled) {
    cookies.expire('authToken');
    cookies.expire('userId');

    return true;
  }

  // if cookies is disabled
  if ('localStorage' in window && window.localStorage !== null) {
    if (localStorage.authToken && localStorage.userId) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userId');

      return true;
    }
  }

  return true;
};


export default {
  add,
  remove,
  get
};

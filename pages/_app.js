import React from 'react';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import { Provider } from 'react-redux';

// Modules Libraries CSS
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'odometer/themes/odometer-theme-default.css';

import '../scss/_main.scss';
import makeStore from '../redux';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // we can dispatch from here too
    // ctx.store.dispatch({type: 'FOO_ACTION', payload: 'myApp redux initial action'});

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Component {...pageProps} />
        </div>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);

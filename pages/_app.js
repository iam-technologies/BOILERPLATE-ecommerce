import React from 'react';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import { Provider } from 'react-redux';

// import '../scss/main.scss';
import '../scss/_index.scss';
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

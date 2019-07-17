import React from 'react';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import { Provider } from 'react-redux';

// Material UI
import '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

// Modules Libraries CSS
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'odometer/themes/odometer-theme-default.css';

import '../scss/_main.scss';
import api from '../serverServices/api';
import { routes as utilsRoutes } from '../utils';
import CookiesPopup from '../components/CookiesPopup';
import makeStore from '../redux';


class MyApp extends App {
  async componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    await api.categories.getRoutes('', (err, res) => {
      return res ? utilsRoutes.addRoutes(res.data) : null;
    });
  }

  static async getInitialProps({ Component, ctx }) {
    // await api.categories.getRoutes('', (err, res) => {
    //   return res ? utilsRoutes.addRoutes(res.data) : null;
    // });

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <CookiesPopup />
            <Component {...pageProps} />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);

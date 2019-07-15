import React from 'react';

import { Product, Layout } from '../components';
import { api } from '../serverServices';
import { routes as utilsRoutes } from '../utils';
import { isClient } from '../serverServices/utils';
// utilsRoutes.getRoute()

const product = ({ serverUrl, routes }) => {
  console.log('serverUrl: ', serverUrl);
  if (isClient) console.log('window.location.href: ', window.location.href);

  const route = utilsRoutes.getRoute(serverUrl);

  const getItems = (routes, entity) => {
    switch (entity) {
      case 'category':
        return <div>this is a category</div>;
      default:
        return <Product url={serverUrl} />;
    }
  };

  return (
    <Layout>
      {getItems()}
    </Layout>
  );
};

product.getInitialProps = async ({ isServer, asPath, req }) => {
  // console.log('referer: ', req.headers.referer); --> this is the whole url
  const routes = await api.categories.getRoutes('', (err, res) => {
    return res ? utilsRoutes.addRoutes(res.data) : null;
  });
  console.log('routes: ', routes);

  const serverUrl = isServer ? req.url : asPath;

  return { serverUrl, routes };
};

export default product;

import React from 'react';

import { Product, Layout } from '../components';
import { api } from '../serverServices';
import { routes as utilsRoutes } from '../utils';

const product = ({ serverUrl }) => {
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
  api.categories.getRoutes('', (err, res) => {
    console.log('res: ', res);
    let routes = [];

    if (res) {
      routes = res.data;

      utilsRoutes.addRoutes(routes);
    }
  });

  const serverUrl = isServer ? req.url : asPath;

  return { serverUrl };
};

export default product;

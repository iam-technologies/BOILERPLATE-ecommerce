import React from 'react';

import { Product, Category, Layout } from '../components';
import { api } from '../serverServices';
import { routes as utilsRoutes } from '../utils';

const product = ({ serverUrl, routes }) => {
  let type = '';

  const category = utilsRoutes.isCategory(serverUrl, routes);
  if (category) type = 'category';

  const getItems = (entity) => {
    switch (entity) {
      case 'category':
        return <Category id={category._id} pathname={serverUrl} />;
      default:
        return <Product url={serverUrl} />;
    }
  };

  return (
    <Layout>
      {getItems(type)}
    </Layout>
  );
};

product.getInitialProps = async ({ isServer, asPath, req }) => {
  const routes = await api.categories.getRoutes('', (err, res) => {
    return res ? res.data : null;
  });

  const serverUrl = isServer ? req.url : asPath;

  return { serverUrl, routes };
};

export default product;

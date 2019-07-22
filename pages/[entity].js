import React from 'react';

import { Product, Category, Layout, PrivateRoute } from '../components';
import { api } from '../serverServices';
import { routes as utilsRoutes } from '../utils';

const dynamicPage = ({ serverUrl, routes, isServer }) => {
  let type = '';

  const category = utilsRoutes.isCategory(serverUrl, routes);
  if (category) type = 'category';

  const privateRoutes = [
    '/my-account',
    '/addresses',
    '/profile',
    '/orders',
    '/orders/:id',
    '/favourites'];

  if (privateRoutes.indexOf(serverUrl) !== -1) type = 'private_route';

  const getItems = (entity) => {
    switch (entity) {
      case 'category':
        return <Category id={category._id} pathname={serverUrl} />;
      case 'private_route':
        return <PrivateRoute pathname={serverUrl} isServer={isServer} />;
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

dynamicPage.getInitialProps = async ({ isServer, asPath, req }) => {
  const routes = await api.categories.getRoutes('', (err, res) => {
    return res ? res.data : null;
  });

  const serverUrl = isServer ? req.url : asPath;

  return { serverUrl, routes, isServer };
};

export default dynamicPage;

import React from 'react';
import { Product, Layout } from '../components';

const product = ({ serverUrl }) => (
  <Layout>
    <Product url={serverUrl} />
  </Layout>
);

product.getInitialProps = async ({ isServer, asPath, req }) => {
  // console.log('referer: ', req.headers.referer); --> this is the whole url

  const serverUrl = isServer ? req.url : asPath;

  return { serverUrl };
};

export default product;

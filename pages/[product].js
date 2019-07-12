import React from 'react';
import { Product, Layout } from '../components';

const product = ({ serverUrl }) => (
  <Layout>
    <h1>this is a page</h1>
    <Product url={serverUrl} />
  </Layout>
);

product.getInitialProps = async ({ isServer, asPath, req }) => {
  // console.log('referer: ', req.headers.referer); --> this is the whole url

  const serverUrl = isServer ? req.url : asPath;

  return { serverUrl };
};

export default product;

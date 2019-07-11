import React from 'react';
import { Product } from '../components';

const product = () => (
  <div>
    <h1>this is a page</h1>
    {/* <Product /> */}
  </div>
);

product.getInitialProps = async () => {
  // console.log('product page: ');
};

export default product;

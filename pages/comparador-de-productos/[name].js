import React from 'react';

import { Layout, Compare } from '../../components';

const compareProducts = ({ name, selectedItems }) => (
  <Layout>
    {/* <h1>this is COMPARE PRODUCTS page</h1> */}
    <Compare catName={name} selectedItems={selectedItems} />
  </Layout>
);

compareProducts.getInitialProps = async ({ query }) => {
  const { name, selectedItems } = query;

  return { name, selectedItems: JSON.parse(selectedItems) };
};

export default compareProducts;

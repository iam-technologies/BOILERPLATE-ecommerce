import React from 'react';

const orderList = () => (
  <div>
    <h1>this is a page</h1>
  </div>
);

orderList.getInitialProps = async () => {
  console.log('orderList page: ');
};

export default orderList;

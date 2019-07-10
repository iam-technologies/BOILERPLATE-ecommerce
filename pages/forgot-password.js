import React from 'react';

const account = ({ id }) => (
  <div>
    <h1>this is a page</h1>
  </div>
);

account.getInitialProps = async ({ query }) => {
  console.log('account page: ');
  return query;
};

export default account;

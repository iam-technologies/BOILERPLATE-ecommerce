import React from 'react';

const myAccount = () => (
  <div>
    <h1>this is a page</h1>
  </div>
);

myAccount.getInitialProps = async () => {
  console.log('myAccount page: ');
};

export default myAccount;

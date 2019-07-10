import React from 'react';

const resetPassword = () => (
  <div>
    <h1>this is a page</h1>
  </div>
);

resetPassword.getInitialProps = async () => {
  console.log('resetPassword page: ');
};

export default resetPassword;

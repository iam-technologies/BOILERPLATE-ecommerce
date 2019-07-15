import React from 'react';
import ForgotPassword from '../components/Account/ForgotPassword';
import { Layout } from '../components';

const forgotPassword = ({ id }) => (
  <Layout>
    <ForgotPassword />
  </Layout>
);

forgotPassword.getInitialProps = async () => {
  console.log('forgotPassword page: ');
};

export default forgotPassword;


// ORIGINAL VERSION
// import React from 'react';

// const account = ({ id }) => (
//   <div>
//     <h1>this is FORGOT PASSWORD page</h1>
//   </div>
// );

// account.getInitialProps = async ({ query }) => {
//   console.log('account page: ');
//   return query;
// };

// export default account;

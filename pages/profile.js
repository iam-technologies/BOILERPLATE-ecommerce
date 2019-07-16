import React from 'react';

const profile = () => (
  <div>
    <h1>this is PROFILE page</h1>
  </div>
);

profile.getInitialProps = async () => {
  console.log('profile page: ');
};

export default profile;

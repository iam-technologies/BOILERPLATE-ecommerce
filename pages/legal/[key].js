import React from 'react';
import Legal from '../../components/Legal/Terms';

const legal = () => (
  <div>
    <Legal />
  </div>
);

legal.getInitialProps = async () => {
  console.log('legal page: ');
};

export default legal;

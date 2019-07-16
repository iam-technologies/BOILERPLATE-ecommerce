import Link from 'next/link';
import React from 'react';

import { MobileHeader } from '../../common';
import ShippingAddress from './ShippingAddress';
import BillingAddress from './BillingAddress';


export default () => (
  <section className="app-my_account app-my_address">
    <MobileHeader
      green
      logo
    />

    <ShippingAddress />
    <BillingAddress />

    <div className="app-my_account-container link_container">
      <Link className="link_return" to="/my-account">
        <img src="/images/icon_back_checkout.png" alt="Volver a mi cuenta" />
        <span>Volver a mi cuenta</span>
      </Link>
    </div>

  </section>
);

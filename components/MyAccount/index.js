import Link from 'next/link';
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { MobileHeader } from '../common';
import { showLoginActs } from '../../redux/actions';


class MyAccount extends PureComponent {
  constructor(props) {
    super(props);
    this.showLogin = bindActionCreators(showLoginActs, props.dispatch);
  }

  componentDidMount() {
    this.showLogin.show(false);
  }

  render() {
    return (
      <section className="app-my_account">
        <MobileHeader
          green
          logo
        />

        <p className="title">Mi cuenta</p>

        <div className="my_account-section">
          <Link href="/orders" className="my_account-link">
            <span className="icon icon_orders" />
            <p>Mis Pedidos</p>
          </Link>

          <Link href="/favourites" className="my_account-link">
            <span className="icon icon_favorites" />
            <p>Mis Favoritos</p>
          </Link>

          <Link href="/addresses" className="my_account-link">
            <span className="icon icon_address" />
            <p>Mis Direcciones</p>
          </Link>

          <Link href="/profile" className="my_account-link">
            <span className="icon icon_profile" />
            <p>Mis Datos</p>
          </Link>
        </div>
      </section>
    )
  }
}

export default connect()(MyAccount);

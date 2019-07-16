import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Link from 'next/link';
import React, { Component } from 'react';

import { showLoginActs } from '../../../../redux/actions';


class MyAccountButton extends Component {
  constructor(props) {
    super(props);

    this.showLogin = bindActionCreators(showLoginActs, props.dispatch);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { isLogin, onCloseNav, pathname } = this.props;

    if (!isLogin) {
      e.preventDefault();

      const redirect = pathname !== '/checkout' && pathname !== '/my-account';
      this.showLogin.show(redirect);
    }

    onCloseNav();
  }

  render() {
    const { isLogin } = this.props;

    return (
      <Link
        className="nav_footer-btns nav_footer-btn_right"
        onClick={this.onClick}
        href="/my-account"
      >
        {isLogin ? 'Mi cuenta' : 'Iniciar sesión'}
      </Link>
    );
  }
}

export default connect(state => ({ isLogin: state.isLogin.login }))(MyAccountButton);

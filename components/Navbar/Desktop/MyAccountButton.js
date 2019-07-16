import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import { showLoginActs } from '../../../redux/actions';


class MyAccountButton extends Component {
  constructor(props) {
    super(props);

    this.showLogin = bindActionCreators(showLoginActs, props.dispatch);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();

    this.showLogin.show(true);
  }

  render() {
    const { isLogin } = this.props;

    return (
      <Link
        className="right_btns-link profile_icon"
        onClick={isLogin ? () => {} : this.onClick}
        to="/my-account"
      >
        <img src={`/images/icon_my-account${isLogin ? '_login' : ''}.png`} alt="User's My account" />
      </Link>
    );
  }
}

export default connect(state => ({ isLogin: state.isLogin.login }))(MyAccountButton);

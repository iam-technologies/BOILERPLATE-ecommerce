import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Link from 'next/link';
import React from 'react';

import { navMobileActs } from '../../../redux/actions';
import NavFooter from './NavFooter';
import ListCategories from './ListCategories';


class NavbarMobile extends React.Component {
  constructor(props) {
    super(props);

    this.onNavMobile = bindActionCreators(navMobileActs, props.dispatch);
    this.onCloseNav = this.onNavMobile.hidden.bind(this);
    this.onClickNav = this.onClickNav.bind(this);
  }

  onClickNav({ target }) {
    if (target && target.className.indexOf('nav_mobile') !== -1) {
      this.onCloseNav();
    }
  }


  render() {
    const { items, show, pathname } = this.props;


    return (
      <header
        className={`nav_mobile_ui${show ? '-show' : ''}`}
        onClick={this.onClickNav}
      >
        <nav className="nav_left">
          <div className="logo">
            <Link
              href="/"
              onClick={this.onCloseNav}
            >
              <img src="/images/logo_xs_white.png" alt="Cocholate" />
            </Link>
          </div>

          <ListCategories
            onCloseNav={this.onCloseNav}
            items={items}
          />

          <NavFooter onCloseNav={this.onCloseNav} pathname={pathname} />
        </nav>
      </header>
    );
  }
}


export default connect(state => ({ show: state.navMobile.show }))(NavbarMobile);

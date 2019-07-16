import React, { Component, Fragment } from 'react';

import isClient from '../../serverServices/utils';
import { api } from '../../serverServices';
import { withWindowResize } from '../hoc';
import NavbarDesktop from './Desktop';
import NavbarMobile from './Mobile';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };

    this.getNavItems = this.getNavItems.bind(this);
  }

  componentDidMount() {
    this.getNavItems();
  }

  getNavItems() {
    const queryParams = { query: { idFather: '0' } };

    api.categories.getAll(queryParams, (error, res) => {
      if (error) return;
      const items = res.data;

      this.setState({ items, loading: false });
    });
  }

  render() {
    const { items, loading } = this.state;
    const { /* location, */ screen } = this.props;
    let styles = {};

    if (screen === 'lg') {
      if (isClient && window.location.href === '/checkout') return null;
      if (isClient && window.location.href !== '/') styles = { height: '95px' };

      return (
        <header
          className={`app-header animation_opacity${!loading ? '-remove' : ''}`}
          style={styles}
        >

          <NavbarDesktop items={items} pathname={isClient && window.location.href} />
        </header>
      );
    }

    return (
      <Fragment>
        {isClient && (
          <NavbarMobile items={items} pathname={isClient && window.location.href} />
        )}
      </Fragment>
    );
  }
}

export default withWindowResize(Navbar);

import Link from 'next/link';
import PropTypes from 'prop-types';
import Router from 'next/router';
import React from 'react';

import { isClient } from '../../../../serverServices/utils';

import { SocialNav } from '../../../common';


export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }


  // goBack() {
  //   const { lastLocation } = this.props;

  //   return lastLocation;
  // }

  goBack() {
    window.history.back();
  }

  render() {
    const { lastLocation, item } = this.props;
    console.log('window.history.length = ', window.history.length);
    return (
      <div className="a_p-nav">
        {/* {
          lastLocation ? (
            <Link
              href={this.goBack()}
            >
              <a className="a_p-nav-btn_return">
                <div className="icon_preview" />
                <p>Volver al listado</p>
              </a>
            </Link>
          ) : (
            <div />
          )
        } */}

        {
          isClient && window.history.length >= 2 ? (
            <div
              onClick={this.goBack}
            >
              <a className="a_p-nav-btn_return">
                <div className="icon_preview" />
                <p>Volver al listado</p>
              </a>
            </div>
          ) : (
            <div />
          )
        }

        <SocialNav item={item} />
      </div>
    );
  }
}


Nav.propTypes = { lastLocation: PropTypes.string };

Nav.defaultProps = { lastLocation: '' };

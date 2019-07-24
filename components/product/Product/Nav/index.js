import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

import { SocialNav } from '../../../common';


export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }


  goBack() {
    const { lastLocation } = this.props;

    return lastLocation;
  }


  render() {
    const { lastLocation, item } = this.props;
    console.log('lastLocation = ', lastLocation);
    return (
      <div className="a_p-nav">
        {
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
        }

        <SocialNav item={item} />
      </div>
    );
  }
}


Nav.propTypes = { lastLocation: PropTypes.string };

Nav.defaultProps = { lastLocation: '' };

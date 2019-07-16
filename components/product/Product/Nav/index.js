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

    return (
      <div className="a_p-nav">
        {
          lastLocation ? (
            <Link
              className="a_p-nav-btn_return"
              to={this.goBack()}
            >
              <div className="icon_preview" />
              <p>Volver al listado</p>
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

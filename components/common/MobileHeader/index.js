import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { navMobileActs } from '../../../redux/actions';
import { withWindowResize } from '../../hoc';
import SearchNavBtn from '../../search/SearchNavBtn';
import CartNavBtn from '../../shoppingCart/CartNavBtn';


class MobileHeader extends Component {
  constructor(props) {
    super(props);

    this.onNavMobile = bindActionCreators(navMobileActs, props.dispatch);
    this.onNavShow = this.onNavMobile.show.bind(this);
  }


  render() {
    const {
      className, home, green, screen, text, subText, logo, hiddenSandwich, hiddenSearch, showCart, lastLocation
    } = this.props;

    const sandwichImage = green || home ? '/images/sandwich.png' : '/images/sandwich_grey.png';

    if (screen === 'lg') return null;

    return (
      <div className={`header_mobile_ui${home ? '-home' : ''}${green ? '-category' : ''} ${className && className}`}>
        {
          !hiddenSandwich || (hiddenSandwich && !lastLocation) ? (
            <button
              className="header_mobile_ui-sandwich"
              onClick={this.onNavShow}
              type="button"
            >
              <img src={sandwichImage} alt="Mostrar menu" />
            </button>
          ) : null
        }
        {
          lastLocation && (
            <Link
              className="header_mobile_ui-icon_previous"
              to={lastLocation}
            >
              <img src="/images/icon_nav_previow.png" alt="previos" />
            </Link>
          )
        }
        {
          logo && (
            <Link to="/" className="header_mobile_ui-logo">
              <img src="/images/logo.png" alt="Cocholate" />
            </Link>
          )
        }
        {
          text || subText ? (
            <div className="header_mobile_ui-center_text">
              { text && <p className="header_mobile_ui-title">{text}</p> }
              { subText && <p className="header_mobile_ui-subtext">{subText}</p> }
            </div>
          ) : null
        }
        {
          !hiddenSearch && <SearchNavBtn />
        }
        {
          showCart && <CartNavBtn iconGrey />
        }
      </div>
    );
  }
}

MobileHeader.propTypes = {
  className: PropTypes.string,
  green: PropTypes.bool,
  home: PropTypes.bool,
  lastLocation: PropTypes.string,
  logo: PropTypes.bool,
  screen: PropTypes.string.isRequired,
  text: PropTypes.string,
  hiddenSandwich: PropTypes.bool,
  hiddenSearch: PropTypes.bool,
  showCart: PropTypes.bool,
  subText: PropTypes.string
};

MobileHeader.defaultProps = {
  className: '',
  green: false,
  home: false,
  lastLocation: '',
  logo: false,
  text: '',
  hiddenSandwich: false,
  hiddenSearch: false,
  showCart: false,
  subText: ''
};


export default connect()(withWindowResize(MobileHeader));

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { showSearchActs } from '../reducer';


class SearchNavBtn extends React.Component {
  constructor(props) {
    super(props);

    this.onShowSearch = bindActionCreators(showSearchActs, props.dispatch);
    this.onSearch = this.onShowSearch.show.bind(this);
  }

  render() {
    const { className } = this.props;

    return (
      <button
        className={`btn_search_ui ${className}`}
        onClick={this.onSearch}
      >
        <img src="/images/icon_search.png" alt="Search" />
      </button>
    );
  }
}

SearchNavBtn.propsTypes = { className: PropTypes.string };

SearchNavBtn.defaultProps = { className: '' };

export default connect()(SearchNavBtn);
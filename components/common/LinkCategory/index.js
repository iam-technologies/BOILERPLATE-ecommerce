// import { Link } from 'react-router-dom';
import Link from 'next/link';

import PropTypes from 'prop-types';
import React from 'react';

import { urlUtils } from '../../../utils';

const LinkCategory = ({ id, className, children, onClick }) => (
  <Link
    to={urlUtils.linkToCategory(id)}
    className={className}
    onClick={onClick}
  >
    {children}
  </Link>
);

LinkCategory.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

LinkCategory.defaultProps = {
  className: 'link_ui',
  onClick: () => {}
};

export default LinkCategory;

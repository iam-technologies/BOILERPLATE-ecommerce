import React, { Component, Fragment } from 'react';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <div> {children} </div>
      </Fragment>
    );
  }
}

export default Layout;

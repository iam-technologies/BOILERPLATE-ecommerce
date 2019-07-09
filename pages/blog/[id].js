import React, { Component } from 'react';

export default class postPage extends Component {
  static async getInitialProps({ query }) {
    return query;
  }

  render() {
    const { id } = this.props;

    return (
      <div>
        <h1>this is post num {id}</h1>
      </div>
    );
  }
}

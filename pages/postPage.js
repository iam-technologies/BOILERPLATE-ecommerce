import React, { Component } from 'react'

export default class postPage extends Component {
    static async getInitialProps({query}){
        return query
    }

  render() {

    const {slug}=this.props;
    console.log('this.props: ', this.props);
    return (
      <div>
        <h1>this is post num {slug}</h1>
        hola 
      </div>
    )
  }
}

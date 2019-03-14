import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTheme } from '../redux/actions/pageActions';
import {Link} from '../routes'

import Layout from '../components/Layout';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
  }

  componentDidUpdate(prevProps) {
    const { color } = this.props;

    if (prevProps.color !== color) {
      this.setState({ color })
    }
  }

  handleClick = (color) => {
    this.props.changeTheme(color)
  }

  render() {

    const { color } = this.state
    return (
      <Layout>
        <div>
          <h1 className="main-title " style={{ color }}>home</h1>
          <button onClick={() => this.handleClick('red')}>red</button>
          <button onClick={() => this.handleClick('aqua')}>aqua</button>
          <Link  href={`/blog`}>
            <a>go to post</a>
          </Link>
          <Link  href={`/blog/1`}>
            <a>go to first post</a>
          </Link>
        </div>
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  const { pageReducer } = state;
  return pageReducer
}




export default connect(mapStateToProps, { changeTheme })(Index);
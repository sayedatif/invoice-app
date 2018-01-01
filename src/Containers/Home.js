import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/AuthService';

class Home extends React.Component {
  render() {
    if(!isLoggedIn() && !this.props.userLoggedIn) {
      return (
        <Redirect to="/login" />
      )
    }

    return (
      <div>
        Hello Home
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userLoggedIn: state.invoice.userLoggedIn
})

export default connect(mapStateToProps, null)(Home);

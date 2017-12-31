import React from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/AuthService';

class Home extends React.Component {
  render() {
    if(!isLoggedIn()) {
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

export default Home;

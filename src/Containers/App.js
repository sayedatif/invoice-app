import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Layout } from 'antd';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import ForgotPassword from './ForgotPassword';
import AppHeader from '../Components/AppHeader';
import AppFooter from '../Components/AppFooter';
import '../App.css';
const { Content } = Layout;

class App  extends React.Component {

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Content>
          <Router>
            <div>
              <AppHeader />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/profile" component={Profile} />
            </div>
          </Router>
        </Content>
        <AppFooter />
      </Layout>
    )
  }
}

export default App;

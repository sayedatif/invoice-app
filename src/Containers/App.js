import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Layout } from 'antd';
import Home from './Home';
import Login from './Login';
import AppHeader from '../Components/AppHeader';
import '../App.css';
const { Content, Footer } = Layout;

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
            </div>
          </Router>
        </Content>
        <Footer style={{ textAlign: 'center', color: '#ff0066' }}>
          Created by Sayed Atif 2017
        </Footer>
      </Layout>
    )
  }
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Layout, Icon } from 'antd';
import Home from './Home';
import Login from './Login';
import '../App.css';
const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header style={{ backgroundColor: '#ff0066' }}>
      <div className="logo">
        <i>Invoice <Icon type="profile" /></i>
      </div>
    </Header>
    <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Router>
        <div>
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

export default App;

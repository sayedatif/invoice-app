import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Layout, Avatar, Dropdown, Menu, message, Icon } from 'antd';
import { clearToken } from '../utils/AuthService';
import { actions as invoiceAction } from '../reducers/invoiceReducer';
import { auth } from '../firebase.js';
const { Header } = Layout;

class AppHeader extends React.Component{

  signoutUser = () => {
    auth.signOut().then(() => {
      clearToken();
      this.props.removeUser();
    }).catch(err => {
      message.error(err.message);
    })
  }

  handleMenuClick = (e) => {
    switch (e.key) {
      case 'signout':
        this.signoutUser();
        break;
      case 'profile':
        this.goToRoute('/profile');
        break;
      default:
    }
  }

  goToRoute = (route) => {
    this.props.history.push(route);
  }

  render() {

    const menu = this.props.user && (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="profile">{this.props.user.displayName} Profile</Menu.Item>
        <Menu.Item key="signout">Sign out</Menu.Item>
      </Menu>
    );

    return (
      <Header className="header-style">
        <div className="logo" onClick={() => this.goToRoute('/')}>
          <i>Invoice <Icon type="profile" /></i>
        </div>
        {this.props.user && this.props.userLoggedIn && <Dropdown overlay={menu}>
          <Avatar src={this.props.user.photoURL} size="large" style={{cursor: 'pointer'}} />
        </Dropdown>}
      </Header>
    )
  }
}

const mapStateToProps = state => ({
  user: state.invoice.user,
  userLoggedIn: state.invoice.userLoggedIn
})

const mapDispatchToProps = dispatch => ({
  removeUser: () => dispatch(invoiceAction.removeUser())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppHeader));

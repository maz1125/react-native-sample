import React from 'react';
import { StyleSheet, View } from 'react-native';
// import ons from 'onsenui';
// import { Page, Toolbar, Button } from 'react-onsenui';

import Logo from '../elements/Logo';
import NewRegisterBtn from '../elements/NewRegisterBtn';
import SnsCertification from '../elements/SnsCertification';

// const ons = require('onsenui');
// const Ons = require('react-onsenui');

class Login extends React.Component {
  render() {
    return (
      <View>
        <Logo />
        <NewRegisterBtn />
        <SnsCertification />
      </View>
    );
  }
}

export default Login;

// <Page>
//   <Toolbar>
//     <div className="center">My title</div>
//   </Toolbar>
//   <Button onClick={this.handleClick}>Click me!</Button>
// </Page>

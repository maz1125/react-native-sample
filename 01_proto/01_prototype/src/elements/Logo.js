import React from 'react';
import { Image, View } from 'react-native';

const logo = require('../assets/images/logo.png');

class Logo extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={logo}
          style={{ backgroundColor: 'lightgreen' }}
        />
      </View>
    );
  }
}

export default Logo;

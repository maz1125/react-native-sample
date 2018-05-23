import React from 'react';
import { Text, View, Image } from 'react-native';

const Certification = require('../assets/images/Certification4.png');

class SnsCertification extends React.Component {
  render() {
    return (
      <View>
        <Text>---------   SNSアカウントでログイン   ---------</Text>
        <Image
          source={Certification}
          style={{ marginLeft: 20 }}
        />
      </View>
    );
  }
}
export default SnsCertification;

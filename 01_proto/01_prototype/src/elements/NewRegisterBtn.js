import React from 'react';
import { StyleSheet, View, Button} from 'react-native';

class NewRegisterBtn extends React.Component {
  onPress(){
    //
  }
  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          onPress={this.onPress}
          title="新規登録"
          color="#fff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    width: 300,
    padding: 5,
    backgroundColor: '#e5697a',
    margin: 3,
    borderRadius: 5,
    marginBottom: 50,
  },
});

export default NewRegisterBtn;

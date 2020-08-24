import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Text>할일 입력 공간</Text>
          <Image source={require('./assets/plus.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#FFF',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Header;

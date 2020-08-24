/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Header from './Header';
import Body from './Body';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello world!!</Text>
        <Header></Header>
        <Body></Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //비율 설정
    flex: 1,

    //container 내부의 아이템들의 방향
    flexDirection: 'column',

    //앱 전체와 상단과의 거리
    paddingTop: 50,
  },
  title: {
    fontWeight: '800',
    fontSize: 30,
    marginLeft: 20,
    marginBottom: 20,
  },
});

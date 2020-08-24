import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

class Body extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.todo}>
          <View style={styles.todoText}>
            <Image source={require('./assets/unchecked.png')} />
            <Text>할일1</Text>
          </View>
          <Image source={require('./assets/del.png')}></Image>
        </View>
        <View style={styles.todo}>
          <View style={styles.todoText}>
            <Image source={require('./assets/unchecked.png')} />
            <Text>할일2</Text>
          </View>
          <Image source={require('./assets/del.png')}></Image>
        </View>
        <View style={styles.todo}>
          <View style={styles.todoText}>
            <Image source={require('./assets/unchecked.png')} />
            <Text>할일3</Text>
          </View>
          <Image source={require('./assets/del.png')}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  todoText: {
    flexDirection: 'row',
  },
});

export default Body;

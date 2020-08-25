import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.todos.map((data) => (
          <View style={styles.todo} key={data.id}>
            <View style={styles.todoText}>
              <Image source={require('./assets/checked.png')} size={20} />
              <Text>{data.text}</Text>
            </View>
            <Image source={require('./assets/del.png')} size={20}></Image>
          </View>
        ))}
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

import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';

class Body extends Component {
  state = [
    {
      text: '할일1',
      completed: false,
    },
    {
      text: '할일2',
      completed: true,
    },
    {
      text: '할일3',
      completed: false,
    },
  ];

  render() {
    return (
      <View style={styles.container}>
        {this.props.todos.map((data) => (
          <View style={styles.todo} key={data.id}>
            <View style={styles.todoText}>
              <TouchableOpacity
                style={styles.todoCheckbox}
                onPress={() => this.props.checkTodo(data.id)}>
                {data.completed ? (
                  <Image source={require('./assets/checked.png')} size={20} />
                ) : (
                  <Image source={require('./assets/unchecked.png')} size={20} />
                )}
              </TouchableOpacity>
              <Text
                style={[
                  data.completed
                    ? styles.todoCompleted
                    : styles.todoNotCompleted,
                ]}>
                {data.text}
              </Text>
            </View>
            <TouchableOpacity onPress={() => this.props.removeTodo(data.id)}>
              <Image source={require('./assets/del.png')} size={20}></Image>
            </TouchableOpacity>
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
  todoCheckbox: {
    marginRight: 5,
  },
  todoNotCompleted: {
    color: 'black',
  },
  todoText: {
    flexDirection: 'row',
  },
  todoDelBtn: {
    color: '#777',
  },
  todoCompleted: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
});

export default Body;

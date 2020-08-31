import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import TodoDetail from './TodoDetail';

class Body extends Component {
  state = {
    newTodoDetail: '',
  };

  addNewTodoDetail = () => {
    if (this.state.newTodoDetail) {
      this.props.addTodoDetail(this.state.newTodoDetail);
      this.setState({
        newTodoDetail: '',
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.props.todos.map((data) => (
          <View>
            <View style={styles.todo} key={data.id}>
              <View style={styles.todoText}>
                <TouchableOpacity
                  style={styles.todoCheckbox}
                  onPress={() => this.props.checkTodo(data.id)}>
                  {data.completed ? (
                    <Image source={require('./assets/checked.png')} size={20} />
                  ) : (
                    <Image
                      source={require('./assets/unchecked.png')}
                      size={20}
                    />
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
              <View style={styles.todoIcons}>
                <TouchableOpacity
                  onPress={this.addNewTodoDetail}
                  activeOpacity={0.5}>
                  <Image
                    source={require('./assets/plus.png')}
                    style={styles.addBtn}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.removeTodo(data.id)}>
                  <Image source={require('./assets/del.png')} size={20}></Image>
                </TouchableOpacity>
              </View>
            </View>

            {/* {this.props.todoDetails.map((deData) => (
              <View>
                <View style={styles.todo} key={deData.id}>
                  <View style={styles.todoText}>
                    <TouchableOpacity
                      style={styles.todoCheckbox}
                      onPress={() => this.props.checkTodo(deData.id)}>
                      {deData.completed ? (
                        <Image
                          source={require('./assets/checked.png')}
                          size={20}
                        />
                      ) : (
                        <Image
                          source={require('./assets/unchecked.png')}
                          size={20}
                        />
                      )}
                    </TouchableOpacity>
                    <TextInput
                      style={[
                        deData.completed
                          ? styles.todoCompleted
                          : styles.todoNotCompleted,
                      ]}
                      placeholder="Enter new todo"
                      autoCorrect={false}
                      value={this.state.newTodoDetail}
                      onChangeText={(newTodoDetail) =>
                        this.setState({newTodoDetail})
                      }
                    />
                  </View>
                  <View style={styles.todoIcons}>
                    {/* <TouchableOpacity
                onPress={this.addNewTodoDetail}
                activeOpacity={0.5}>
                <Image
                  source={require('./assets/plus.png')}
                  style={styles.addBtn}
                />
              </TouchableOpacity> */}
            {/* <TouchableOpacity
                      onPress={() => this.props.removeTodo(deData.id)}>
                      <Image
                        source={require('./assets/del.png')}
                        size={20}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))} */}
          </View>
        ))}
        <TodoDetail></TodoDetail>
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
  todoIcons: {
    flexDirection: 'row',
  },
});

export default Body;

import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

class TodoDetail extends Component {
  state = {
    newTodoDetail: '',
  };

  //   addNewTodoDetail = () => {
  //     if (this.state.newTodoDetail) {
  //       this.props.addTodoDetail(this.state.newTodoDetail);
  //       this.setState({
  //         newTodoDetail: '',
  //       });
  //     }
  //   };

  render() {
    return (
      <View>
        <View style={styles.todo}>
          <View style={styles.todoText}>
            <TouchableOpacity style={styles.todoCheckbox}>
              <Image source={require('./assets/checked.png')} />
            </TouchableOpacity>
            <Text>할일디테일</Text>
          </View>
          <View style={styles.todoIcons}>
            <TouchableOpacity>
              <Image source={require('./assets/del.png')} size={20}></Image>
            </TouchableOpacity>
          </View>
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
  todoCheckbox: {
    marginLeft: 20,
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

export default TodoDetail;

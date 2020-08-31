import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './Header';
import Body from './Body';
import todoDetail from './TodoDetail';
import TodoDetail from './TodoDetail';

export default class App extends React.Component {
  state = {
    todos: [],
    todoDetails: [],
  };

  // 할일 추가 함수
  addTodo = (todo) => {
    // 새로운 할일(todo) 객체 생성
    const newTodo = {
      id: Date.now(), // 등록시간
      text: todo, // 할일 내용
      completed: false, // 완료 여부
      detail: 0, // 디테일 있는지 여부
    };

    // state 업데이트
    this.setState((prevState) => ({
      todos: [
        newTodo, // 새로 추가된 할일(todo)
        ...prevState.todos, // 기존의 할일 목록
      ],
    }));
  };

  // 할일 디테일 추가 함수
  addTodoDetail = (todoD) => {
    // 할일 디테일 추가시 할일의 디테일 상태 업데이트
    this.setState((prevState) => {
      const [todo] = prevState.todos.filter((e) => e.id === id);
      todo.detail = todo.detail + 1;
      return {
        todos: [...prevState.todos],
      };
    });

    // 새로운 할일(todo) 객체 생성
    const newTodoDetail = {
      id: this.state.todos.text, //상위 할일의 텍스트로 아이디 설정
      num: this.state.todos.detail, // 등록번호
      text: todoD, // 할일 디테일 내용
      completed: false, // 완료 여부
    };

    // state 업데이트
    this.setState((prevState) => ({
      todoDetails: [
        newTodoDetail, // 새로 추가된 할일 디테일(todoDetail)
        ...prevState.todoDetails, // 기존의 할일 디테일 목록
      ],
    }));
  };

  checkTodo = (id) => {
    this.setState((prevState) => {
      const [todo] = prevState.todos.filter((e) => e.id === id);
      todo.completed = !todo.completed;
      return {
        todos: [...prevState.todos],
      };
    });
  };

  removeTodo = (id) => {
    this.setState((prevState) => {
      const index = prevState.todos.findIndex((e) => e.id === id);
      prevState.todos.splice(index, 1);
      return {
        todos: [...prevState.todos],
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <Header addTodo={this.addTodo} />
        <Body
          addTodoDetail={this.addTodoDetail}
          todos={this.state.todos}
          todoDetails={this.state.todoDetails}
          checkTodo={this.checkTodo}
          removeTodo={this.removeTodo}>
          <TodoDetail></TodoDetail>
          {/* <View>
            <TodoDetail
              todos={this.state.todos}
              todoDetails={this.state.todoDetails}
              checkTodo={this.checkTodo}
              removeTodo={this.removeTodo}
            />
          </View> */}
        </Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: '#EEE',
  },
  title: {
    fontWeight: '800',
    fontSize: 30,
    marginLeft: 20,
    marginBottom: 20,
  },
});

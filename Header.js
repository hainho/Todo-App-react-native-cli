import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Header extends Component {
  state = {
    newTodo: '',
  };

  addNewTodo = () => {
    if (this.state.newTodo) {
      this.props.addTodo(this.state.newTodo);
      this.setState({
        newTodo: '',
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            placeholder="Enter new todo"
            autoCorrect={false}
            value={this.state.newTodo}
            onChangeText={(newTodo) => this.setState({newTodo})}
          />
          <TouchableOpacity onPress={this.addNewTodo}>
            <Image source={require('./assets/plus.png')} />
          </TouchableOpacity>
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
  inputText: {
    flex: 1,
  },
});

export default Header;

import React, { Component } from "react";
import { connect } from "react-redux";
import { todoInput } from "../redux/action";

class TodoInput extends Component {
  state = {
    todoInput: "",
  };

  handleInput = (event) => {
    const input = event.target.value;
    this.setState({
      todoInput: input,
    });
  };

  addtodoHandler = () => {
    this.props.addtodo(this.state.todoInput);
    this.setState({ todoInput: "" });
  };

  render() {
    return (
      <div>
        <h2>Enter Todo List </h2>
        <input value={this.state.todoInput} onChange={this.handleInput} />
        {"    "}
        <button onClick={this.addtodoHandler}>Add Todo</button>
       
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addtodo: (todo) => dispatch(todoInput(todo)),
  };
};

export default connect(null, mapDispatchToProps)(TodoInput);

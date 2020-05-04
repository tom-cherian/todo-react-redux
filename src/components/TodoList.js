import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../redux/action";

class TodoList extends Component {

  deleteTodo = (deleteId) => {
    console.log(deleteId)
    this.props.deleteTodo(deleteId)
  }

  render() {
    debugger;
    console.log(this.props.showtodoList);
    return (
      <div>
        <ol>
          {this.props.showtodoList.map((todo, index) => {
            return (
              <li key={index}>
                {todo.content}
                <button onClick={() => this.deleteTodo(todo.id)}> X </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showtodoList: state.todoReducer.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (deleteId) => dispatch(deleteTodo(deleteId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

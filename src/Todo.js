import React, { Component } from "react";
import "./Todo.css";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

class Todo extends Component {
  constructor(props){
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(){
    this.props.removeTodo(this.props.id);
  }
  render(){
    return (
      <div>
      <button>Edit</button>
      <button onClick={this.handleRemove}>X</button>
        <li>{this.props.task}</li>
      </div>
    )
  }
}
export default Todo;

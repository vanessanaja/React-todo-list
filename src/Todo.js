import React, { Component } from "react";
import "./Todo.css";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

class Todo extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
      <button>Edit</button>
      <button>X</button>
        <li>{this.props.task}</li>
      </div>
    )
  }
}
export default Todo;

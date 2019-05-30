import React, { Component } from "react";
// import NewTodoForm from "./NewTodoForm";
// import Todo from "./Todo";
// import "./TodoList.css";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {todos: []};
  }
  render(){
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
        
        </ul>
      </div>
    )
  }
}
export default TodoList;

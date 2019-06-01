import React, { Component } from "react";
import uuid from "uuid/v4";
// import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = { task: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt){
    evt.preventDefault();
    //spread operator here is really just the 1 task in this.state that we added
    //and we include uuid to add the id.
    this.props.createTodo({...this.state, id: uuid()});
    //clear input
    this.setState({ task: ""});
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlfor="task">New Todo</label>
        <input type="text" 
        placeholder="New Todo" 
        id="task" 
        name="task"
        value={this.state.task}
        onChange={this.handleChange}>
        </input>
        <button>Add Todo</button>
      </form>
    )
  }
}
export default NewTodoForm;

import React, { Component } from "react";
// import uuid from "uuid/v4";
// import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = { task: ""}
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  render(){
    return (
      <form>
        <label htmlfor="task">New Todo</label>
        <input type="text" 
        placeholder="New Todo" 
        id="task" 
        value={this.state.task}
        onChange={this.handleChange}>
        </input>
      </form>
    )
  }
}
export default NewTodoForm;

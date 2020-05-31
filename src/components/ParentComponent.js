import React, { Component } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

export class ParentComponent extends Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: [],
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Form formData={this.state} handleChange={this.handleChange} />
        <DisplayData formData={this.state} />
      </div>
    );
  }
}

export default ParentComponent;

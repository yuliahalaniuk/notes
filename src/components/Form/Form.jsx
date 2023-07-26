import React, { Component } from 'react';

class Form extends Component {
  state = {
    user: '',
    email: '',
  };

  handleInpuChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmitEvent(this.state);

    this.reset();
    e.currentTarget.reset();
  };

  reset = () => {
    this.setState({ user: '', email: '' });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          Name
          <input
            type="text"
            value={this.state.userName}
            name="user"
            onChange={this.handleInpuChange}
          ></input>
        </label>
        <label>
          Email
          <input
            type="email"
            value={this.state.tag}
            name="email"
            onChange={this.handleInpuChange}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;

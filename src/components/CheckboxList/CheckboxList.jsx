import React, { Component } from 'react';

// const heyState = {
//   checkboxes: OPTIONS.reduce((options, option) => {
//     return {
//       ...options,
//       [option]: false,
//     };
//   }, {}),
// };

// console.log(heyState);

class CheckboxList extends Component {
  state = {
    One: false,
    Two: false,
    Three: false,
  };

  OPTIONS = Object.keys(this.state);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    console.log('name', name);
    this.setState(prevState => {
      return {
        ...prevState,
        [name]: !prevState[name],
      };
    });

    console.log(this.state);
  };

  selectAllCheckboxes = bool => {
    this.OPTIONS.forEach(opt => {
      this.setState(prevState => ({
        ...prevState,
        [opt]: bool,
      }));
    });
  };

  selectAll = e => {
    this.selectAllCheckboxes(true);
  };

  deselectAll = e => {
    this.selectAllCheckboxes(false);
  };

  onFormSubmit = e => {
    e.preventDefault();

    const checkedData = this.OPTIONS.filter(opt => this.state[opt]);
    console.log(checkedData);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          {this.OPTIONS.map(option => {
            return (
              <label key={option}>
                <input
                  name={option}
                  type="checkbox"
                  checked={this.state[option]}
                  onChange={this.handleCheckboxChange}
                />
                {option}
              </label>
            );
          })}

          <button
            type="button"
            className="btn btn-outline-primary mr-2"
            onClick={this.selectAll}
          >
            Select All
          </button>

          <button
            type="button"
            className="btn btn-outline-primary mr-2"
            onClick={this.deselectAll}
          >
            Deselect All
          </button>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default CheckboxList;

import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: 'Clue Mediator'
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.hanldeSubmit = this.hanldeSubmit.bind(this);
  }

  // handle input change event
  onInputChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  // handle button click event and pass data in parent
  hanldeSubmit() {
    this.props.handleInput(this.state.inputVal);
  }

  render() {
    return (
      <div style={{ margin: '50px 0 50px 50px' }}>
        <h3>Child Component</h3>
        <hr />
        Input:
        <input value={this.state.inputVal} onChange={this.onInputChange} style={{ margin: '0 10px' }} />
        <input type="button" value="Submit" onClick={this.hanldeSubmit} />
      </div>
    );
  }
}

export default Child;
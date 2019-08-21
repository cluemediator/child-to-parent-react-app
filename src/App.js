import React, { Component } from 'react';
import Child from './Child';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    }
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  // handle input value coming from the child component
  handleInputValue(val) {
    this.setState({ inputVal: val });
  }

  render() {
    return (
      <div style={{ width: 500, margin: 50 }}>
        <h3>Parent Component</h3>
        <hr />
        Input Value: {this.state.inputVal}
        <Child handleInput={this.handleInputValue} />
      </div >
    );
  }
}

export default App;
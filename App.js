import React, { Component } from 'react';

class App  extends Component {
  clickHandle = () => {
    console.log('btn clicked');
  }
  render() {
    return <button onClick={this.clickHandle}>Click</button>;
  }
}

export default App;
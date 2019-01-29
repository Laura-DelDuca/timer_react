import React from "react";

class Increment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {time : 0};
  
      // Doesn't work without that...
      this.Increment = this.Increment.bind(this);
    }
  
    Increment() {
      this.setState(state => ({
        time: state.time +1
      }));
    }
  
    render() {
      return (
        <button onClick={this.Increment}>
          {this.state.time}
        </button>
      );
    }
  }
  

export default Increment;
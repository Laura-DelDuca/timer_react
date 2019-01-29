import React from "react";

class Decrement extends React.Component {
    constructor(props) {
      super(props);
      this.state = {time : 100};
  
      // Doesn't work without that...
      this.Decrement = this.Decrement.bind(this);
    }
  
    Decrement() {
      this.setState(state => ({
        time: state.time -1
      }));
    }
  
    render() {
      return (
        <button onClick={this.Decrement}>
          {this.state.time}
        </button>
      );
    }
  }
  

export default Decrement;
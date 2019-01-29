import React from "react";

class Increment extends React.Component {
    constructor(props) {
      super(props)
      this.state = {time : 0};
    }
  
    render() {
      return (
        <div>
          <button onClick={this.props.onClick}>
            + 1
          </button>
        </div>
      );
      console.log(this.state.time);
    }
  }
  
export default Increment;

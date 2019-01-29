import React from "react";
import Timer from "./Timer";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { isToggleOn: true };

    // Doesn't work without that...
    // this.props.handleToggleClick = this.props.handleToggleClick.bind(this);
  }

  render() {
    return (
      <div>
      {/* <Timer count={this.state.isToggleOn} /> */}
      <button onClick={this.props.onClick}>
        {this.props.isToggleOn ? 'START' : 'STOP'}
      </button>
      </div>
    );
  }
}



export default Toggle;
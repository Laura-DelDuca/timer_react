import React from "react";

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
      {/* va chercher la propriété onClick dans Timer */}
      <button onClick={this.props.onClick}>
      {/* Timer va chercher le status de Toggle: on a les deux possibiluté ici, au clic, on passe de l'une à l'autre. */}
        {this.props.isToggleOn ? 'START' : 'RESET'}
      </button>
      </div>
    );
  }
}



export default Toggle;
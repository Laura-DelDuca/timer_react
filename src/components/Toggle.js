import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="toggle" >
        {/* onClick: on récupère la propriété associée à l'évenement onClick définie dans Timer, ici handleToggleClick*/}
        <button id="togglebtn" onClick={this.props.onClick}>
          {/* Changer le status du Toggle: passer de start à reset et inversément, le status est défini dans Timer; 
          au clic, on déclenche le changement*/}
          {this.props.isToggleOn ? 'START' : 'RESET'}
        </button>
      </div>
    );
  }
}

export default Toggle;
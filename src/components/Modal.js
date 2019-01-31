import React from "react";
import ReactModal from "react-modal";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ReactModal
          //isOpen : elle est prédéfinie; vérifie ce qui doit être fait 
          isOpen={this.props.displayed}
          contentLabel="Minimal Modal Example"
          //Classname: utilisée pour mettre le CSS
          className="Modal"
          //overlayClassName: utilisée pour mettre du css à l'apparition du Modal
          overlayClassName="overlay"
        >
          <p id="textModal">Time's over mate... C'mon, have a break !</p>
          <button id="closeModal" className="buttonsModal" onClick={this.props.onClick}>Close</button>
          <button id="restartModal" className="buttonsModal" onClick={this.props.onClick2}>Restart</button>
        </ReactModal>
      </div>
    );
  }
}

export default Modal;

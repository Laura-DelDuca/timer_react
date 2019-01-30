import React from "react";
import ReactModal from "react-modal";

class Modal extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div id="test">
        {/* cette partie ne doit plus exister vu que le trigger de fait automatiquement à la fin du décompte */}
        {/* <button onClick={this.props.showModal}>Trigger Modal</button> */}
        <ReactModal 
        //isOpen : pas à définir; existe telle qyelle, vérifié s'il doit faire quelque chose ou pas
           isOpen={this.props.displayed}
           contentLabel="Minimal Modal Example"
           className="Modal"
        >
          <p id="textModal">Time's over mate... C'mon, have a break !</p>
          <button onClick={this.props.onClick}>Close</button>
          <button onClick={this.props.onClick2}>Restart</button>
        </ReactModal>
      </div>
    );
  }
}


export default Modal;

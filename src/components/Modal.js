import React from "react";
import ReactModal from "react-modal";

class Modal extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        {/* cette partie ne doit plus exister vu que le trigger de fait automatiquement à la fin du décompte */}
        {/* <button onClick={this.props.showModal}>Trigger Modal</button> */}
        <ReactModal 
        //isOpen : pas à définir; existe telle qyelle
           isOpen={this.props.displayed}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.props.onClick}>Close</button>
        </ReactModal>
      </div>
    );
  }
}


export default Modal;

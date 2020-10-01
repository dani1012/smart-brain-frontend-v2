import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');  //create container
  }


   componentDidMount() {
    //adding the portal element to modal-root in index.html, to open modal
     modalRoot.appendChild(this.el); 
  }

   componentWillUnmount() {
   	// to close the modal
     modalRoot.removeChild(this.el);
  }



   render() {

  	 return ReactDOM.createPortal(
      this.props.children,
      this.el
    );

  }

}

  export default Modal;
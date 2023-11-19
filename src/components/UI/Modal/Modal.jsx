/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className='fixed top-0 left-0 w-full h-screen z-20 bg-black/75' onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-[20vh] left-[5%] w-[90%] bg-white p-4 rounded-2xl shadow-md z-30 animate-[slide-down_0.3s_ease-out_forward] md:w-[50rem]">
      <div>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
     {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , portalElement)}
    </Fragment>
  );
};

 

export default Modal;






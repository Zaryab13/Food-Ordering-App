import { Fragment } from "react";

import styles from "./Modal.module.css";

import { createPortal } from "react-dom";

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalElement)}
      {
        (createPortal(<ModalOverlay>{props.children}</ModalOverlay>),
        portalElement)
      }
    </Fragment>
  );
};
export default Modal;

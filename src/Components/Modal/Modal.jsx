import React from "react";
import styles from "./modal.module.css";


const Modal = ({ setModal, children, title }) => {
  // const produtos = useContext(DataContext)

  function removeModal(event) {
    if (event.target === event.currentTarget) {
      setModal(false);
    }
  }

  return (
    <div className={styles.container} onClick={removeModal}>
      <div className={`${styles.modal} ${styles.anime}`}>
        <div className={styles.header}>
          <p>{`${title}`}</p>
          <button onClick={removeModal}>x</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

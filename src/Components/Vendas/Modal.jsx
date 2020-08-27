import React, { useContext } from "react";
import styles from "./modal.module.css";
import DataContext from "../../Data/DataContext";

const Modal = ({ setModal }) => {
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
            <p>Cadastro de Venda</p>
            <button onClick={removeModal}>x</button>
            </div>

        <form>
          <label>Nome do Cliente:</label>
          <input type="text" />
          <label>Produtos:</label>
          <input type="text" />
        </form>
      </div>
    </div>
  );
};

export default Modal;

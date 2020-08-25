import React from "react";
import styles from "./vendas.module.css";
import CardPrincipal from "../CardPrincipal/CardPrincipal";

const Vendas = () => {
  return (
    <CardPrincipal>
      <div className={styles.header}>
        <p>Histórico de vendas</p>
        <button>+</button>{" "}
      </div>
      <div className={styles.container} >
        <p>Nome </p>
        <p>Data</p>
        <p>Total</p>
        <p>Informações</p>

        
       </div>
      
    </CardPrincipal>
  );
};

export default Vendas;

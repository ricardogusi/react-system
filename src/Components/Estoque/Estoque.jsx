import React from "react";
import CardPrincipal from "../CardPrincipal/CardPrincipal";
import styles from "./estoque.module.css";
import { ReactComponent as Pencil } from "../../Assets/pencil.svg";

const Estoque = () => {
 

  return (
    <CardPrincipal>
      <div className="header">
        <p>Estoque</p>
        <button>+</button>{" "}
      </div>
      <div className="container">
        <div>
          <ul className={styles.produtoHead}>
            <li>Código</li>
            <li>Nome</li>
            <li>Quantidade</li>
            <li>Preço Unitário</li>
          </ul>
          <ul className={styles.produto}>
            <li>354</li>
            <li>Pote de Mel 500gr</li>
            <li>250</li>
            <li>R$ 50,00</li>
            <Pencil className={styles.pencil} />
          </ul>
          <ul className={styles.produto}>
            <li>354</li>
            <li>Pote de Mel 500gr</li>
            <li>250</li>
            <li>R$ 50,00</li>
            <Pencil className={styles.pencil} />
          </ul>
          <ul className={styles.produto}>
            <li>354</li>
            <li>Pote de Mel 500gr</li>
            <li>250</li>
            <li>R$ 50,00</li>
            <Pencil className={styles.pencil} />
          </ul>
          <ul className={styles.produto}>
            <li>354</li>
            <li>Pote de Mel 500gr</li>
            <li>250</li>
            <li>R$ 50,00</li>
            <Pencil className={styles.pencil} />
          </ul>
        </div>
      </div>
    </CardPrincipal>
  );
};

export default Estoque;

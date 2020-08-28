import React from "react";
import styles from "./cardPrincipal.module.css";
import Logo from "../../Assets/honeylogo.png";
import { ReactComponent as Dash } from "../../Assets/dashboard.svg";
import { ReactComponent as Sales } from "../../Assets/sales.svg";
import { ReactComponent as Stock } from "../../Assets/stock.svg";
import { Link } from "react-router-dom";


const CardPrincipal = ({children}) => {
  return (
    <div className={styles.cardPrincipal} >
    <div className={styles.menu}>
      <img src={Logo} alt="logo" />
      <div className={styles.buttonsContainer}>
      <Link to="/">
        <div className={styles.button}>
          <Dash />
          <p>
            {" "}
            Dashboard
          </p>
        </div>
        </Link>
        <br/>
        <Link to="/vendas">
        <div className={styles.button}>
          <Sales />
          <p>
            {" "}
            Vendas
          </p>
        </div>
        </Link>
        <br/>

        <Link to="/estoque">
        <div className={styles.button}>
          <Stock />
          <p>
            {" "}
            Estoque
          </p>
        </div>
        </Link>
      </div>
    </div>
    <div className={styles.container}>
          {children}
    </div>
    </div>
  );
};

export default CardPrincipal;

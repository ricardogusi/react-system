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
        <div className={styles.button}>
          <Dash />
          <p>
            {" "}
            <Link to="/">Dashboard</Link>
          </p>
        </div>
        <div className={styles.button}>
          <Sales />
          <p>
            {" "}
            <Link to="/vendas">Vendas</Link>
          </p>
        </div>
        <div className={styles.button}>
          <Stock />
          <p>
            {" "}
            <Link to="/estoque">Estoque</Link>
          </p>
        </div>
      </div>
    </div>
    <div className={styles.container}>
          {children}
    </div>
    </div>
  );
};

export default CardPrincipal;

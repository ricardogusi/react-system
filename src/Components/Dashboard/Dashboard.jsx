import React from "react";
import styles from "./dashboard.module.css";
import CardPrincipal from "../CardPrincipal/CardPrincipal";

const Dashboard = () => {
  return (
    <CardPrincipal>
    <div className="">
      <div className={styles.vendas}>333 Vendas</div>
      <div className={styles.estoque}>2 itens com nível baixo</div>
      <div className={styles.grafico}>gráfico com vendas por dia</div>
    </div>
    </CardPrincipal>
  );
};

export default Dashboard;

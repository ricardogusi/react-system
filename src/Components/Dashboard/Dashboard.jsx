import React from "react";
import styles from "./dashboard.module.css";
import CardPrincipal from "../CardPrincipal/CardPrincipal";

const Dashboard = () => {
  return (
    <CardPrincipal>
    <div className="">
      <div className={styles.vendas}>número de vendas</div>
      <div className={styles.estoque}>qtd itens abaixo estoque</div>
      <div className={styles.grafico}>gráfico com vendas por dia</div>
    </div>
    </CardPrincipal>
  );
};

export default Dashboard;

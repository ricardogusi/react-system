import React, { useContext } from "react";
import CardPrincipal from "../CardPrincipal/CardPrincipal";
import DataContext from "../../Data/DataContext";
import styles from "./vendas.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import MaisInfo from "./MaisInfo";

const Vendas = () => {
  const [modal, setModal] = useState();

  const data = useContext(DataContext);
  const vendas = data[1];

  function handleClick() {
    setModal(true);
  }

  return (
    <>
      {modal && (
        <Modal setModal={setModal} title={"Cadastro de Vendas"}>
          <div className={styles.container}>
            <div className={`${styles.box} ${"form"}`}>
              <label>Nome do Cliente: </label>
              <input type="text" />
              <label>Código do Produto: </label>
              <input type="number" />

              <label>Quantidade: </label>
              <input type="number" />

              <div className={styles.botaoAdicionar}>Adicionar Produto</div>
            </div>
            <button className={styles.botao}>Cadastrar Pedido</button>
            <div className={styles.pedido}>
              
              <input disabled type="text" placeholder="Nome do Cliente" />
              <ul>
                <li>Pote de mel </li>
                <span>1 un</span>  
                <span>R$ 35,00</span>               
                <li>Própolis </li>
                <span>1 un</span> 
                <span>R$ 35,00</span>     
                <li>Própolis </li>
                <span>1 un</span>  
                <span>R$ 35,00</span>             

              </ul>
              <p>Total: R$ 250,00</p>
            </div>
          </div>
        </Modal>
      )}
      <CardPrincipal>
        <div className="header">
          <p>Histórico de vendas</p>
          <button onClick={handleClick}>+</button>{" "}
        </div>
        <div className="container">
          <div>
            <ul className="barraHead">
              <li>Nome</li>
              <li>Data</li>
              <li>Total</li>
              <li>Info</li>
            </ul>

            {vendas.vendas.map((venda, i) => (
              <ul key={venda.nome} className="barra">
                <li>{venda.nome}</li>
                <li>{venda.data}</li>
                <li>R$ {venda.total.toFixed(2).replace(".", ",")}</li>
                <li>
                  <button>Mais informações</button>
                </li>
              </ul>
            ))}
            <MaisInfo />
          </div>
        </div>
      </CardPrincipal>
    </>
  );
};

export default Vendas;

import React, { useContext } from "react";
import CardPrincipal from "../CardPrincipal/CardPrincipal";
import DataContext from "../../Data/DataContext";
import { useState } from "react";
import MaisInfo from "./ModalMaisInfo";
import ModalVendas from "./ModalVendas";

const Vendas = () => {
  const [modalVendas, setModalVendas] = useState(true);
  const [modalInfo, setModalInfo] = useState(false);

  const data = useContext(DataContext);
  const vendas = data[1];

  function handleClick() {
    setModalVendas(true);
  }

  function handleClickInfo() {
    setModalInfo(true);
  }

  return (
    <>
      {/* {modalVendas &&} */}
      <ModalVendas setModal={setModalVendas} />
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
              <div key={i}>
                <ul  className="barra">
                  <li>{venda.nome}</li>
                  <li>{venda.data}</li>
                  <li>R$ {venda.total.toFixed(2).replace(".", ",")}</li>
                  <li>
                    <button onClick={handleClickInfo}>Mais informações</button>
                  </li>
                </ul>
                {modalInfo && <MaisInfo setModal={setModalInfo} />}
              </div>
            ))}
          </div>
        </div>
      </CardPrincipal>
    </>
  );
};

export default Vendas;

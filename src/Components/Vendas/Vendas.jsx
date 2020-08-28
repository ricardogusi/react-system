import React, { useContext } from "react";
import CardPrincipal from "../CardPrincipal/CardPrincipal";
import DataContext from '../../Data/DataContext'

import Modal from './Modal'
import { useState } from "react";



const Vendas = () => {


  const [modal, setModal] = useState()
  


  const data = useContext(DataContext)
  const vendas = data[1]
  
  function handleClick () {
        setModal(true)
  }
  
  
 

  return (<>
    {modal && <Modal setModal={setModal} title={'Cadastro de Vendas'}>
      
    </Modal> }
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

          {vendas.vendas.map((venda,i)=> (                               
          <ul key={venda.nome} className="barra">
            <li >{venda.nome}</li>
            <li>{venda.data}</li>
            <li>R$ {venda.total.toFixed(2).replace('.', ',')}</li>
            <li>
              <button>Mais informações</button>
            </li>
          </ul>
          ))}

        </div>
      </div>
    </CardPrincipal>
    </>
  );
};

export default Vendas;

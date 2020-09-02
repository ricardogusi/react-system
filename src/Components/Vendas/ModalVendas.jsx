import React, { useEffect } from "react";
import Modal from "../Modal/Modal";
import styles from "./vendas.module.css";
import { useState } from "react";
import { useContext } from "react";
import DataContext from "../../Data/DataContext";

const ModalVendas = ({ setModal }) => {
  const [clientName, setClientName] = useState();
  const [codigoProduto, setCodigoProduto] = useState();
  const [quantidade, setQuantidade] = useState();
  const [itens, setItens] = useState({});
  
  const [pedido, setPedido] = useState([])
  
  

  const data = useContext(DataContext);
  const produtos = data[0];

  // console.log(produtos.produtos[0].name)

  function handleName({ target }) {
    setClientName(target.value);
  }


   function handleProduto({ target }) {
     
     setCodigoProduto(+target.value);
  }

  function handleQuantidade({ target }) {
    setQuantidade(target.value);
  }
  
  useEffect(()=>{  
      setPedido(prev=> ([...prev, itens]))    
  },[itens])
  

  function handleAdicionar() {
    Array.from(produtos.produtos).forEach((produto) => {      
      
      if(produto.id === codigoProduto) {
        setItens(prev =>({...prev, name:produto.name}))        
        setItens(prev =>({...prev, id:produto.id}))
        setItens(prev =>({...prev, quantity:quantidade}))
        setItens(prev =>({...prev, value:produto.value}))                       
        
      }
      
    });
    
    
  }
  
  console.log(pedido)
  

  return (
    <div>
      <Modal setModal={setModal} title={"Cadastro de Vendas"}>
        <div className={styles.container}>
          <div className={`${styles.box} ${"form"}`}>
            <label>Nome do Cliente: </label>
            <input type="text" onChange={handleName} />
            <label>Código do Produto: </label>
            <input type="number" onChange={handleProduto} min='0' />

            <label>Quantidade: </label>
            <input type="number" onChange={handleQuantidade} min='0' />

            <div className={styles.botaoAdicionar} onClick={handleAdicionar}>
              Adicionar Produto
            </div>
          </div>
          <button className={styles.botao}>Cadastrar Pedido</button>
          <div className={styles.pedido}>
          <span className={styles.clientName}>{clientName}</span>
            
            <ul>
              <li>{itens.name}</li>
              {itens.name ? <span>{quantidade} {quantidade? <>un</> : ''}</span> : ''}
              <span>{itens.value}</span>          
            </ul>
            <p>Total: R$ 250,00</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalVendas;

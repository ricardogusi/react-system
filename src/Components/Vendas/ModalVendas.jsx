import React, { useEffect } from "react";
import Modal from "../Modal/Modal";
import styles from "./vendas.module.css";
import { useState } from "react";
import { useContext } from "react";
import DataContext from "../../Data/DataContext";

const ModalVendas = ({ setModal }) => {
  const [name, setName] = useState();
  const [codigoProduto, setCodigoProduto] = useState();
  const [quantidade, setQuantidade] = useState();
  const [itemName, setItemName] = useState();
  const [itemId, setItemId] = useState();
  const [itemQuantity, setItemQuantity] = useState();
  const [itemValue, setItemValue] = useState();

  const [teste, setTeste] = useState({
    name: "",
    id:"",
  })

  useEffect(()=>{
    setTeste({name:'teste'})
    
  },[])
  
  console.log(teste)

  const data = useContext(DataContext);
  const produtos = data[0];

  // console.log(produtos.produtos[0].name)

  function handleName({ target }) {
    setName(target.value);
  }

   function handleProduto({ target }) {
     setCodigoProduto(+target.value);
  }

  function handleQuantidade({ target }) {
    setQuantidade(target.value);
  }
  
  function handleAdicionar() {
    Array.from(produtos.produtos).forEach((produto) => {      
      if(produto.id === codigoProduto) {
        setItemName(produto.name)
        setItemId(produto.id)
        setItemQuantity(quantidade)
        setItemValue(produto.value)     
                       
      }
    });
    
  }
  
  
  

  return (
    <div>
      <Modal setModal={setModal} title={"Cadastro de Vendas"}>
        <div className={styles.container}>
          <div className={`${styles.box} ${"form"}`}>
            <label>Nome do Cliente: </label>
            <input type="text" onChange={handleName} />
            <label>Código do Produto: </label>
            <input type="number" onChange={handleProduto} />

            <label>Quantidade: </label>
            <input type="number" onChange={handleQuantidade} />

            <div className={styles.botaoAdicionar} onClick={handleAdicionar}>
              Adicionar Produto
            </div>
          </div>
          <button className={styles.botao}>Cadastrar Pedido</button>
          <div className={styles.pedido}>
            <input
              disabled
              type="text"
              placeholder="Nome do Cliente"
              value={name}
              readOnly
            />
            <ul>
              <li>{itemName}</li>
              <span>{itemQuantity} un</span>
              <span>{itemValue}</span>
              {/* <li>Própolis </li>
              <span>1 un</span>
              <span>R$ 35,00</span>
              <li>Própolis </li>
              <span>1 un</span>
              <span>R$ 35,00</span> */}
            </ul>
            <p>Total: R$ 250,00</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalVendas;

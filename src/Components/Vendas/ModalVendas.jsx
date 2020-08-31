import React from 'react'
import Modal from '../Modal/Modal'
import styles from "./vendas.module.css";
import { useState } from 'react';
import { useContext } from 'react';
import DataContext from '../../Data/DataContext';


const ModalVendas = ({setModal}) => {
  const [name, setName] = useState()
  const [codigoProduto, setCodigoProduto] = useState()
  const [quantidade, setQuantidade] = useState()
  const [itens, setItens] = useState({})

  const data = useContext(DataContext)
  const produtos = data[0]

  console.log(produtos.produtos[0].id)

  function handleName({target}) {
    setName(target.value)
  }

  function handleProduto ({target}) {
    setCodigoProduto(target.value)
  }

  function handleQuantidade ({target}) { 
    setQuantidade(target.value)
  }

  function handleAdicionar (){
    produtos.forEach(produto => {
      if(produtos.produto.id === codigoProduto){
        setItens.name(produto.name)
        setItens.quantity(quantidade)
        setItens.value(produto.value)
      }
      
    });

    console.log(itens)
  }

  return (
    <div>
      <Modal setModal={setModal} title={"Cadastro de Vendas"}>
          <div className={styles.container}>
            <div className={`${styles.box} ${"form"}`}>
              <label>Nome do Cliente: </label>
              <input type="text" onChange={handleName}/>
              <label>Código do Produto: </label>
              <input type="number" onChange={handleProduto} />
              
              <label>Quantidade: </label>
              <input type="number" onChange={handleQuantidade} />

              <div className={styles.botaoAdicionar} onClick={handleAdicionar}>Adicionar Produto</div>
            </div>
            <button className={styles.botao}>Cadastrar Pedido</button>
            <div className={styles.pedido}>
              <input disabled type="text" placeholder="Nome do Cliente" value={name} />
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
    </div>
  )
}

export default ModalVendas

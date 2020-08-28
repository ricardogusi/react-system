import React, { useState } from "react";
import CardPrincipal from "../CardPrincipal/CardPrincipal";
import styles from "./estoque.module.css";
import { ReactComponent as Pencil } from "../../Assets/pencil.svg";
import { ReactComponent as Trash } from "../../Assets/bin.svg";
import { useContext } from "react";
import DataContext from "../../Data/DataContext";
import Modal from "../Vendas/Modal";

const Estoque = () => {
 

  const [modal, setModal ] = useState()

  const data = useContext(DataContext)
  const produtos = data[0]

  

  function handleClick() {
    setModal(true)
  }

  return (
    <>
    {modal && <Modal setModal={setModal} title={'Cadastro de Produtos'}>
      <div className={styles.form}>
      <label>Nome: </label>
      <input type="text" />
      <label>Código: </label>
      <input type="number" />
      <label>Quantidade: </label>
      <input type="number" />
      <label>Valor Unitário: </label>
      <input type="number" />
      <button>Cadastrar</button>


      </div>
      
    </Modal>}
    <CardPrincipal>
      <div className="header">
        <p>Estoque</p>
        <button onClick={handleClick}>+</button>{" "}
      </div>
      <div className="container">
        <div>
          <ul className={styles.produtoHead}>
            <li>Código</li>
            <li>Nome</li>
            <li>Quantidade</li>
            <li>Preço Unitário</li>
          </ul>

          {produtos.produtos.map((produto) =>(
            <ul key={produto.codigo} className={styles.produto}>
            <li>{produto.codigo}</li>
            <li>{produto.nome}</li>
            <li>{produto.quantidade}</li>
            <li>R$ {produto.valor.toFixed(2).replace('.', ',')}</li>
            <div>
            <Pencil className={styles.pencil} />
            <Trash className={styles.bin} />
            </div>
          </ul>
          ))}
          
        </div>
      </div>
    </CardPrincipal>
    </>
  );
};

export default Estoque;

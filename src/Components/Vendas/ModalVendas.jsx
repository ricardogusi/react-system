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
  const [subPedido, setSubPedido] = useState([]);
  const [pedido, setPedido] = useState({});
  const [valor, setValor] = useState([]);
  const data = useContext(DataContext);
  const produtos = data[0];

  const [teste, setTeste] = useState({})

  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const total = valor.reduce((a, b) => a + b, 0);

  // const subPedidoProdutos = subPedido.map((produto) => {
  //   return console.log(produto);
  // });

  function handleCadastrarPedido() {
    setPedido({
      name: `${clientName}`,
      data: `${day}/${month}/${year}`,
      total: `${total}`,
      produtos: `${itens}`,
    });
  }

  // console.log(itens)
  //   1:
  // id: 1
  // name: "Pote de Mel"
  // quantity: "2"
  // value: 50
  // __proto__: Object
  // 2:
  // id: 2
  // name: "Própolis"
  // quantity: "3"
  // value: 20

  // {
  //   name: "Ricardo Gusi",
  //   data: "26/08/2020",
  //   total: 150.0,
  //   produtos: {
  //     name: "Pote de mel",
  //     value: 50,
  //     quantity: 3,
  //   },
  // },

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

  useEffect(() => {
    setSubPedido((prev) => [...prev, itens]);
  }, [itens]);

  function handleAdicionar() {
    Array.from(produtos.produtos).forEach((produto) => {
      if (produto.id === codigoProduto) {
        
        setItens((prev) => ({ ...prev, name: produto.name }));
        setItens((prev) => ({ ...prev, id: produto.id }));
        setItens((prev) => ({ ...prev, quantity: quantidade }));
        setItens((prev) => ({ ...prev, value: produto.value }));
        
        const total = quantidade * produto.value;
        setValor((prev) => [...prev, total]);

        console.log(itens)
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
            <input type="number" onChange={handleProduto} min="0" />

            <label>Quantidade: </label>
            <input type="number" onChange={handleQuantidade} min="0" />

            <div className={styles.botaoAdicionar} onClick={handleAdicionar}>
              Adicionar Produto
            </div>
          </div>
          <button className={styles.botao} onClick={handleCadastrarPedido}>
            Cadastrar Pedido
          </button>
          <div className={styles.pedido}>
            <span className={styles.clientName}>{clientName}</span>

            {subPedido.map((item, i) => (
              <ul key={i}>
                <li>{item.name}</li>
                {item.quantity > 0 ? <span>{item.quantity} un</span> : ""}

                {item.value > 0 ? (
                  <span>
                    R$
                    {(item.quantity * item.value).toFixed(2).replace(".", ",")}
                  </span>
                ) : (
                  ""
                )}
              </ul>
            ))}
          </div>
          {total > 0 ? (
            <div className={styles.total}>
              Total: R${total.toFixed(2).replace(".", ",")}
            </div>
          ) : (
            ""
          )}
        </div>
      </Modal>
    </div>
  );
};
export default ModalVendas;

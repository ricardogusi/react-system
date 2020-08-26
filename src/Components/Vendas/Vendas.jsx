import React from "react";

import CardPrincipal from "../CardPrincipal/CardPrincipal";

const Vendas = () => {
  return (
    <CardPrincipal>
      <div className='header'>
        <p>Histórico de vendas</p>
        <button>+</button>{" "}
      </div>
      <div className='container' >
        <div>
          <ul  className='barraHead'>
            <li>Nome</li>
            <li>Data</li>
            <li>Total</li>
            <li>Info</li>
          </ul>
          <ul  className='barra'>
            <li>Ricardo Gusi</li>
            <li>26/08/2020</li>
            <li>R$ 500,00</li>
            <li><button>Mais informações</button></li>
          </ul>
          <ul  className='barra'>
            <li>Ricardo Gusi</li>
            <li>26/08/2020</li>
            <li>R$ 500,00</li>
            <li><button>Mais informações</button></li>
          </ul>
          <ul  className='barra'>
            <li>Ricardo Gusi</li>
            <li>26/08/2020</li>
            <li>R$ 500,00</li>
            <li><button>Mais informações</button></li>
          </ul>
          <ul  className='barra'>
            <li>Ricardo Gusi</li>
            <li>26/08/2020</li>
            <li>R$ 500,00</li>
            <li><button>Mais informações</button></li>
          </ul>
          <ul  className='barra'>
            <li>Ricardo Gusi</li>
            <li>26/08/2020</li>
            <li>R$ 500,00</li>
            <li><button>Mais informações</button></li>
          </ul>
          <ul  className='barra'>
            <li>Ricardo Gusi</li>
            <li>26/08/2020</li>
            <li>R$ 500,00</li>
            <li><button>Mais informações</button></li>
          </ul>
        </div>

        
       </div>
      
    </CardPrincipal>
  );
};

export default Vendas;

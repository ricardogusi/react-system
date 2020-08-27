import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Vendas from "./Components/Vendas/Vendas";
import Estoque from "./Components/Estoque/Estoque";
import DataContext from "./Data/DataContext";

function App() {


  const data = [
    {"produtos": [
    {
      nome: "Pote de Mel",
      codigo: 354,
      valor: 50,
      quantidade: 200,
    },
    {
      nome: "Própolis",
      codigo: 623,
      valor: 20,
      quantidade: 100,
    },
    {
      nome: "Shampoo de Mel",
      codigo: 861,
      valor: 30,
      quantidade: 80,
    },
    {
      nome: "Condicionador de Mel",
      codigo: 389,
      valor: 30,
      quantidade: 20,
    }],
    },
    {"vendas": [{
      nome: "Ricardo Gusi",
      data: "26/08/2020",
      total: 150.0,
      produtos: {
        nome: "Pote de mel",
        valor: 50,
        quantidade: 3,
      },
    },
    {
      nome: "Fernando Oliveira",
      data: "26/08/2020",
      total: 180.0,
      produtos: {
        nome: "Shampoo de mel",
        valor: 30,
        quantidade: 6,
      },
    },
    {
      nome: "Talita Arboleya",
      data: "27/08/2020",
      total: 100.0,
      produtos: {
        nome: "Própolis",
        valor: 20,
        quantidade: 5,
      },
    },
    {
      nome: "Rafael Tobaru",
      data: "28/08/2020",
      total: 60,
      produtos: {
        nome: "Condicionador de Mel",
        valor: 30,
        quantidade: 2,
      },
    }]},
  ];

  

  return (
    <BrowserRouter>
      
       <DataContext.Provider value={data} >
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/vendas">
          <Vendas />
        </Route>
        <Route path="/estoque">
          <Estoque />
        </Route>
        </DataContext.Provider>
      
    </BrowserRouter>
  );
}

export default App;

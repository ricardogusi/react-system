import React from "react";
import "./App.css";
import CardPrincipal from "./Components/CardPrincipal/CardPrincipal";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Vendas from "./Components/Vendas/Vendas";
import Estoque from "./Components/Estoque/Estoque";

function App() {
  return (
    <BrowserRouter>
      
      
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/vendas">
          <Vendas />
        </Route>
        <Route path="/estoque">
          <Estoque />
        </Route>
    
      
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Vendas from "./Components/Vendas/Vendas";
import Estoque from "./Components/Estoque/Estoque";
import DataContext from "./Data/DataContext";
import data from './Data/Data'

function App() {


  
  

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

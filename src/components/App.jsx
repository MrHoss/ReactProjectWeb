import React, { useState } from 'react';
import './App.css';
import Table from './Tables/Table';
import countriesData from "./Data/countries.js";
import ProductCard from "./Cards/ProductCard"
import Login from "./Forms/Login"


const App = () => {
  const [countries] = useState([...countriesData]);
  return (
  <div className='App'>
        <Table data={countries} rowsPerPage={4} />
        <ProductCard image="https://img.freepik.com/fotos-premium/carro-com-esporte-e-design-moderno-estacionado-na-estrada_33867-7.jpg?w=2000"
        title="Carro barato" price="R$5,00" />
        <Login />
        
        
  </div>
  );
}
export default App;
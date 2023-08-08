import React from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido a H4rd-Ware Company!"/>
    </div>
  );
}

export default App;

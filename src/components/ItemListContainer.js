import React from 'react';

const ItemListContainer = ({ saludo }) => {
  // Lista de componentes de PC 
  const pcComponents = [
    { id: 1, categoria: 'Procesador', precio: 200, nombre: 'Procesador Intel i7' },
    { id: 2, categoria: 'Placa de video', precio: 400, nombre: 'RTX 3070' },
    { id: 3, categoria: 'Motherboard', precio: 110, nombre: 'Placa Madre S670' },
    { id: 4, categoria: 'RAM', precio: 80, nombre: 'Memoria RAM de 16 GB' },
    { id: 5, categoria: 'Almacenamiento', precio: 100, nombre: 'SSD de 500 GB' },
  ];

  const handleComponentClick = (id) => {
    console.log('Componente con ID:', id, 'ha sido seleccionado');
  };

  return (
    <div className="container mt-4 ">
      <div className="row justify-content-center ">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
            <h3 className="card-title">{saludo}</h3>
              <ul className="list-group">
                {pcComponents.map((componentes) => (
                  <li
                    key={componentes.id}
                    className="list-group-item list-group-item-action"
                    onClick={() => handleComponentClick(componentes.id)}
                  >
                    <div className="d-flex justify-content-between">
                      <strong>{componentes.categoria}</strong>
                      <span>${componentes.precio}</span>
                    </div>
                    <div>{componentes.nombre}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;

import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">H4rd-Gaming</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Placas de video</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Procesadores</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Motherboards</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">RAM</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Almacenamiento</a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};
// Proximamente pienso implementar una logica que cuando toque el item de la categoria se filtre

export default NavBar;

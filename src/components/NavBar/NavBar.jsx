import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import { useCartContext } from '../../context/globalContext';
import CartProvider from '../../context/globalContext';
import logo from '../../../src/logo.png'
import './NavBar.css'

function NavScrollExample() {
  const {itemsTotal} = useCartContext()
  return (
    <CartProvider>
    <Navbar fixed="top" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/">
        <img src={logo} alt="Tienda de articulos" style={{ width: '70px', height: '70px' }} />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/">Todos los Generos</Link>
            <NavDropdown title="Discos" id="discosDropDown">
              <Link to="/category/jazz">
                Jazz
              </Link>
              <br></br>
              <Link to="/category/country">
                Country
              </Link>
              <br></br>
              <Link to="/category/rock">
                Rock
              </Link>
              <br></br>
              <Link to="/category/fusion">
                Fusion
              </Link>
            </NavDropdown>
            {itemsTotal !== 0 ? (
              <Link to="/carrito">
                <CartWidget size={3200} />
                {itemsTotal}
              </Link>
            ) : (
              <div>
                <CartWidget size={3200} />
                {itemsTotal}
              </div>
            )}
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </CartProvider>
  );
}

export default NavScrollExample;
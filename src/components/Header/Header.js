import React from 'react';
import clases from './Header.module.css'
import Ponclase from '../../hoc/Ponclase';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import {Router} from 'react-router-dom';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';
//import Button from 'react-bootstrap/Button';
//import img from 'react-bootstrap/img';
class Header extends React.Component {

    render() {
        return (
            // <div className={clases.Header}>
            <Ponclase clases={clases.Header}>
                {/*<h1>{this.props.titulo}</h1> */}
                {/* <p className={estilos.join(' ')}>Parece que funciona</p> */}
                
                {/* <button style={estilo} onClick={this.props.cambiandounnombre}>Cambio un nombre</button>
                <button onClick={this.props.cambiaLogin}>Login ON-OFF</button> */}
            {/* </div> */}
            
            
           
            <Navbar bg="blue" expand="lg" variant="dark">
            <Navbar.Brand>
            <img src="https://cdn.worldvectorlogo.com/logos/quiksilver-10.svg" class="rounded-circle" alt="Logo" height="60">
             </img> 
             </Navbar.Brand>
             
            <Navbar.Brand href="/">RackWave</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"> 
            <Nav.Link ><Link to="/">Principal</Link></Nav.Link>
            <Nav.Link href="/about">Sobre nosotros</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link><Link to="/cesta"><img src="https://uploads.codesandbox.io/uploads/user/b6b6b59a-402a-4567-b00c-84c95d2c4f7d/BhNa-bag-icon.png" class="" alt="Logo" height="23">
             </img></Link> </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
             
            </Ponclase>
        )
    }
}

export default Header;
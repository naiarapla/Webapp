import React from 'react';
import clases from './App.module.css';
import Cesta from '../components/Cesta/Cesta';
import Productos from '../components/Productos/Productos';
import Pedidos from '../components/Pedidos/Pedidos';
import About from '../containers/About/About';
import Formulario from '../containers/Formulario/Formulario';
import Detalles from '../containers/Detalles/Detalles';
import Contact from '../containers/Contact/Contact';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
//import PersonDetail from '../containers/PersonDetail/PersonDetail';
//import CreatePerson from '../containers/CreatePerson/CreatePerson';
//import EditPerson from '../containers/EditPerson/EditPerson';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

export const ContextoAutenticado = React.createContext({
  autenticado: false,
});

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      pedido:[],
      cantidad:0,
      quantity:0,
      autenticado: false,
      otroValor: 'Hola',
      error: false
      
    }
  }
  componentDidMount() {
    console.log('<App> se ha montado');
    axios.get('https://proyecto-dsm-ee3fd-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
      .then(response => {
        let productos = [];
        for (let key in response.data) {
          productos.push({
            nombre: response.data[key].nombre,
            precio: response.data[key].precio,
            imagen: response.data[key].imagen,
            cantidad: this.state.cantidad,
            idb: key
          });
        }
   
        this.setState({ productos: productos });
      }).catch(error => {
        this.setState({ error: true });
      });
  }
  componentWillUnmount() {
    console.log('<App> se va a desmontar');
  }
 
  add = (id) => {
    let productos = [...this.state.productos];
    productos[id].cantidad=this.state.productos[id].cantidad+1;
    this.setState({productos: productos});

   
    if (this.state.productos[id].cantidad<2){
    let pedidos = [...this.state.pedido];
    let newpedido=[...pedidos,
      {nombre:this.state.productos[id].nombre,precio:this.state.productos[id].precio,imagen:this.state.productos[id].imagen,cantidad:this.state.productos[id].cantidad,idb:this.state.productos[id].idb}
    ]
      this.setState({pedido: newpedido});

      this.setState({quantity: this.state.productos[id].cantidad + this.state.quantity});
  
     }else{
      let pedido = [...this.state.pedido];
     for (var i=0; i<this.state.pedido.length; i++){
       if (pedido[i].idb==this.state.productos[id].idb){
        pedido[i].cantidad=this.state.productos[id].cantidad;
       }
      }
     this.setState({ pedido: pedido });
    

    // for (var i=0; i<this.state.pedido.length; i++){
      
      //this.setState({quantity: this.state.pedido[i].cantidad});
      if(this.state.pedido.length<2){
      this.setState({quantity: this.state.productos[id].cantidad});
      }else{
        this.setState({quantity: this.state.quantity+1});
      }

   // }

    //if(this.state.pedido.length>=2){
    //this.setState({quantity: this.state.productos[id].cantidad+this.state.pedido[i-1].cantidad});
    //}
  
    

     }
    
 
    }

  borrar = (id) => {
    if (this.state.pedido[id].cantidad<2){
      let productos = [...this.state.productos];
      for (var i=0; i<this.state.productos.length; i++){
        if (productos[i].idb==this.state.pedido[id].idb){
        productos[i].cantidad=this.state.pedido[id].cantidad-1;
        this.setState({productos: productos});
        }
      }

      let pedidos = [...this.state.pedido];
      pedidos.splice(id, 1);
      this.setState({ pedido: pedidos });

      this.setState({quantity:this.state.quantity-1});
    
     }else{
      let pedidos = [...this.state.pedido];
      pedidos[id].cantidad=this.state.pedido[id].cantidad-1;
      this.setState({ pedido: pedidos });

      let productos = [...this.state.productos];
      for (var i=0; i<this.state.productos.length; i++){
        if (productos[i].idb==this.state.pedido[id].idb){
        productos[i].cantidad=this.state.pedido[id].cantidad;
        this.setState({productos: productos});
        }
      }
          this.setState({quantity: this.state.quantity-1});

     }
    }

    cantidad = () => {

      for (var i=0; i<this.state.pedido.length; i++){
        if (this.state.pedido[i].cantidad<2){
        this.setState({quantity: this.state.pedido[i].cantidad + this.state.quantity});
       }else{
        this.setState({quantity: this.state.pedido[i].cantidad + this.state.quantity});
       }
      }
    
    }
    

  render() {
    

    let listaproductos = null;
    listaproductos = (
      <Productos
        products={this.state.productos}
        add={this.add}
        quantity={this.cantidad} />
    );

    let listapedidos = null;
    listapedidos = (
      <Pedidos
        pedir={this.state.pedido}
        borrar={this.borrar}/>
    );

    const estilos= {
      backgroundColor:'olive',
      position: 'absolute',
      top: '17px',
      right: '6px',
      display: 'inline-block',
      background: 'goldenrod',
      padding:'4px',
      borderRadius: '80%',
      fontSize: '1rem',
      minwidth: '17px',
      textAlign: 'center',
      fontFamily: 'hurme-semibold,sans-serif',
      fontWeight: '600',
      color:'#fff',
    }

    return (
      <div className={clases.App}>
        <Router>
          <div>
              <Navbar bg="blue" expand="lg" variant="dark">
                <Navbar.Brand>
                <img src="https://cdn.worldvectorlogo.com/logos/quiksilver-10.svg" class="rounded-circle" alt="Logo" height="60" />
                
                </Navbar.Brand>
                
                <Navbar.Brand href="/">RackWave</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"> 
                <Nav.Link><Link to="/" >Principal</Link></Nav.Link>
                <Nav.Link><Link to="/about" >Sobre nosotros</Link></Nav.Link>
                <Nav.Link><Link to="/contact" >Contacto</Link></Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link><Link to="/cesta"><img src="https://uploads.codesandbox.io/uploads/user/b6b6b59a-402a-4567-b00c-84c95d2c4f7d/BhNa-bag-icon.png" class="" alt="Logo" height="23">
                </img></Link><span style={estilos}>{this.state.quantity}</span> </Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/cesta" render={(props) => <Cesta {...props} Pedidos={listapedidos} cantidad={this.state.quantity} />}>
              </Route>
              <Route path="/formulario" render={(props) => <Formulario {...props} Pedidos={this.state.pedido}  />}>
            
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/:id">
                <Detalles />
              </Route>
              <Route path="/" >

              <ContextoAutenticado.Provider
                  value={{
                    autenticado: this.state.autenticado,
                    otroValor: this.state.otroValor,
                    cambiaLogin: this.cambiaLogin
                  }}>
                  {listaproductos}
              </ContextoAutenticado.Provider>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }

}

export default App;



import React from 'react';
import clases from './Workers.module.css';
import Productos from '../../components/Productos/Productos';
import Pedidos from '../../components/Pedidos/Pedidos';
import Cesta from '../../components/Cesta/Cesta';
import Card from 'react-bootstrap/Card';
//import Showhide from '../../components/Showhide/Showhide';
import axios from 'axios';

export const ContextoPedido = React.createContext({pedido: []})
export const ContextoAutenticado = React.createContext({
  autenticado: false,
});


class Workers extends React.Component {
  state = {
    enviadopedido: false,
    pedido:[]
}

  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      pedido: [],
      autenticado: false,
      otroValor: 'Hola',
      error: false
      
    }
  }
 
  componentDidMount() {
    console.log('<Workers> se ha montado');
    axios.get('https://proyecto-dsm-ee3fd-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
      .then(response => {
        let productos = [];
        for (let key in response.data) {
          productos.push({
            nombre: response.data[key].nombre,
            precio: response.data[key].precio,
            imagen: response.data[key].imagen,
            idb: key
          });
        }
   
        this.setState({ productos: productos });
      }).catch(error => {
        this.setState({ error: true });
      });
  }
  componentWillUnmount() {
    console.log('<Workers> se va a desmontar');
  }


  cambiaLogin = () => {
    const autenticado = this.state.autenticado;
    this.setState({ autenticado: !autenticado });
  }

  add = (id) => {
   
    let pedidos = [...this.state.pedido];
    let newpedido=[...pedidos,
      {nombre:this.state.productos[id].nombre,precio:this.state.productos[id].precio,imagen:this.state.productos[id].imagen,idb:this.state.productos[id].idb}
    ]
      this.setState({pedido: newpedido});

      let listapedidos = null;
      listapedidos = (
        <Pedidos
          pedir={this.state.pedido}/>
      );
      const pedidoData = {
        listapedidos
    };
      this.props.Pedidos(true, pedidoData );
      this.setState({enviado: true});
      
      
    }

  render() {
    

    let listaproductos = null;
      listaproductos = (
        <Productos
          products={this.state.productos}
          add={this.add} />
      );

      let listapedidos = null;
      listapedidos = (
        <Pedidos
          pedir={this.state.pedido}/>
      );

      //<Cesta pedid={listapedidos} />
      <ContextoPedido.Provider
      value={{pedido:{listapedidos}}}>
       <Cesta />
      </ContextoPedido.Provider>
     
   
    return (
      <div className={clases.Workers}>
      <ContextoAutenticado.Provider
        value={{
          autenticado: this.state.autenticado,
          otroValor: this.state.otroValor,
          cambiaLogin: this.cambiaLogin
        }}>
        {listaproductos}
        
        {listapedidos}

      </ContextoAutenticado.Provider>

    </div>
  )
}

}

export default Workers;
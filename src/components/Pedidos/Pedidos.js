import React from 'react';
import Pedido from './Pedido/Pedido';
import ErrorBoundary from '../../hoc/ErrorBoundary';
import CardDeck from 'react-bootstrap/CardDeck';

class Pedidos extends React.Component {
    componentDidMount() {
        console.log('<Productos> se ha montado');
    }
    componentWillUnmount() {
        console.log('<Productos> se va a desmontar');
    }
    render() {
        return (
            <React.Fragment>
                <CardDeck>
                {this.props.pedir.map((pedid, id) => {
                    return <ErrorBoundary key={id}>
                        <Pedido nombre={pedid.nombre}
                        precio={pedid.precio}
                        imagen={pedid.imagen}
                        id={pedid.idb} 
                        cantidad={pedid.cantidad}
                        borrar={() => this.props.borrar(id)} />
                    </ErrorBoundary>
                })}
            </CardDeck>
            </React.Fragment>
        )
    }
}

export default Pedidos;
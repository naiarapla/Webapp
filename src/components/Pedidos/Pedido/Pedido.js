import React from 'react';
import PropTypes from 'prop-types';
import Ponclase from '../../../hoc/Ponclase';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
class Pedido extends React.Component {
    constructor(props) {
        super(props);
        this.elementoInput = React.createRef();
        //this.state = { elementoInput: React.createRef() };
    }
    componentDidMount() {
        console.log('<Pedido> se ha montado');
    }
    componentWillUnmount() {
        console.log('<Pedido> se va a desmontar');
    }
    render() {
        const aleatorio = Math.random();
        if (aleatorio > 1) {
            throw new Error('Este producto es problemática');
        }
        const enlace = '/' + this.props.id;
        
        return (
            <React.Fragment>
                <Ponclase >
                <Row>
                <Col  xs={12} md={3} style={{ width: '190px', marginLeft:'30px', marginBottom:'10px'}}>
                <img variant="left" src={this.props.imagen} height= '225px'/>
                </Col>

                <Col  xs={12} md={7} style={{ width: '500px', margin:'10px'}}>
                <p>{this.props.nombre}</p>
                <p>Cantidad:{this.props.cantidad}</p>
                <p>{this.props.precio}€</p>
                <Link to="/"><Button onClick={this.props.borrar}>Borrar</Button></Link>
                </Col>
                    
               
        
        </Row>
        </Ponclase>
            </React.Fragment>
        )
    }
}

Pedido.propTypes = {
    nombre: PropTypes.string,
    precio: PropTypes.number,
    imagen: PropTypes.string,
    borrar: PropTypes.func
}

export default Pedido;
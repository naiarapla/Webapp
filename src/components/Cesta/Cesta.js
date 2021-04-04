import React from 'react';
import Pedido from '../Pedidos/Pedido/Pedido';
import Pedidos from '../Pedidos/Pedidos';
import ContextoPedido from '../../containers/Workers/Workers';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {
    withRouter
} from "react-router-dom";
import {Redirect} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Cesta extends React.Component {
    constructor(props) {
        super(props);
        this.elementoInput = React.createRef();
    }
    componentDidMount() {
      console.log('<Cesta> se ha montado');
  }
    componentWillUnmount() {
        console.log('<Cesta> se va a desmontar');
    }

    

    render() {
      
      let enlaces = (
        <>
            <Link to="/formulario">Realizar pedido</Link>
        </>);
          return(
            <div>
            <Row style={{margin:'20px'}}>
            <Col xs={12} md={2}>
             <h5> MI CESTA ({this.props.cantidad})</h5>
            </Col>
            <Col xs={12} md={10} >
              <h5 class='float-right' style={{marginRight:'200px'}}>RESÚMEN DEL PEDIDO: ( {this.props.cantidad} Artículos)</h5>
            
            </Col>
          </Row>

          <Row style={{margin:'20px'}}>
              {this.props.Pedidos}
            <Col xs={12} md={10}  >
            <p class='float-right'> <Button variant="primary" >{enlaces}</Button></p>
            
            </Col>
          </Row>
          </div>

        )
    }
}

export default Cesta;
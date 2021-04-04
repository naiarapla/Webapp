import React from 'react';
import {
    withRouter
} from "react-router-dom";
import axios from 'axios';
import FichaProducto from '../../components/FichaProducto/FichaProducto';


class Detalles extends React.Component {
    state = {
        producto: {},
    }

    componentDidMount() {
        console.log('<Detalles> se ha montado');
        const id = this.props.match.params.id;
        axios.get('https://proyecto-dsm-ee3fd-default-rtdb.europe-west1.firebasedatabase.app/productos.json?orderBy="$key"&equalTo="' + id + '"')
            .then(response => {
                const producto = [];
                for (let key in response.data) {
                    producto.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                this.setState({producto: producto[0]});
            });
    }
    render() {
        const id = this.props.match.params.id;
        return (
            <>
                <h1>Ficha producto</h1>
                <FichaProducto datos={this.state.producto} /> 
            </>
        )
    }
}

export default withRouter(Detalles);
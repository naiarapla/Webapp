import React from 'react';


class FichaProducto extends React.Component {

    render() {

        return (
            <>
                <h2>{this.props.datos.nombre}</h2>
                <p>{this.props.datos.precio}€ </p>
               
                <p><img src={this.props.datos.imagen} /></p>
            </>
        )
    }
}

export default FichaProducto;
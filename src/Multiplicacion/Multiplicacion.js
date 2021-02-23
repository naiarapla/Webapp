import React from 'react';

class Multiplicacion extends React.Component {
    render() {
        return (
            <div>
                <p onClick={this.props.click}>Vamos a multiplicar el número {this.props.number}</p>
                <p onClick={this.props.click}>El resultado es: {this.props.result}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.result} />
            </div >
        )
    }
};

export default Multiplicacion;
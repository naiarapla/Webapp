import React from 'react';

class MostrarChar extends React.Component {
    render() {
        const style = {
            backgroundColor: 'light',
            font: 'inherit',
            border: '1px solid blue',
            margin: '8px',
            cursor: 'pointer'
          };
        return (
            <div>
                <p onClick={this.props.click}>Escriba algo: {this.props.texto}</p>
                <p onClick={this.props.click}>Número de caracteres: {this.props.nchars} 
                </p>
                <p>{this.props.children}</p> 
            </div >
        )
    }
};

export default MostrarChar;
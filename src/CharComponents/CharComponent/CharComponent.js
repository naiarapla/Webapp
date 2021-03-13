import React from 'react';

class CharComponent extends React.Component {
    render() {
        const estilo = { 
            display: 'inline-block', 
            padding: '16px', 
            textalign: 'center', 
            margin: '16px',
            border: '1px solid black'
          };

       
        return ( 
            <div style={estilo}>   
            <p onClick={this.props.borrando}>{this.props.char}</p>
            <button onClick={this.props.borrando}>Borrar</button>
            <p>{this.props.children}</p>
            </div >    
        )
    }
};

export default CharComponent;
import React from 'react';


class ValidationComponent extends React.Component {
    render() {

        if (this.props.resultado <= 5) {
        return (
            <div>
               <p>Texto demasiado corto</p>
               <p>{this.props.children}</p>
            </div >
        )}
        if (this.props.resultado > 5) {
            return (
                <div>
                   <p onClick={this.props.texto}>Texto suficientemente largo</p>
                   <p>{this.props.children}</p>
                </div >
            )}
    }
};

export default ValidationComponent;
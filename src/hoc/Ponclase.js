import React from 'react';

class Ponclase extends React.Component {
    render() {
        return (
            <div className={this.props.clases}>
                {this.props.children}
            </div>
        )
    }
}

export default Ponclase;
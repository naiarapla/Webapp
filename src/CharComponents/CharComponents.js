import React from 'react';
import CharComponent from './CharComponent/CharComponent';

class CharComponents extends React.Component {
    render() {

        return (
            <React.Fragment>
                {this.props.chars.map((charac, id) => {
                    return <CharComponent char={charac.char}
                        key={id} 
                        borrando={() => this.props.borra(id)}
                        />
                    })}
            </React.Fragment>
        )
    }
}

export default CharComponents;
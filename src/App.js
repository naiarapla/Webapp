import React from 'react';
import './App.css';
import Multiplicacion from './Multiplicacion/Multiplicacion';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Multiplicacion: [
        { number: 0, result: 0 },
      ],
      otherState: 'some other value'
    }
  }


  nameChangedHandler = (event) => {
    this.setState({
      Multiplicacion: [
        { number: event.target.value }
      ]
    })
  }

  multiplicar37 = () => {
    this.setState({
      Multiplicacion: [
        {number: this.state.Multiplicacion[0].number, result: this.state.Multiplicacion[0].number*37 }
      ]
    })
  }

  multiplicar43 = () => {
    this.setState({
      Multiplicacion: [
        {number: this.state.Multiplicacion[0].number, result: this.state.Multiplicacion[0].number*43 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'light',
      font: 'inherit',
      border: '1px solid blue',
      margin: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Calculadora</h1>
        <Multiplicacion
          number={this.state.Multiplicacion[0].number}
          changed={this.nameChangedHandler}
          result={this.state.Multiplicacion[0].result}
          click={() => this.multiplicar37()}
          click={() => this.multiplicar43()} />
          <button style={style} onClick={() => this.multiplicar37()}>Multiplicar por 37</button>
          <button style={style} onClick={() => this.multiplicar43()}>Multiplicar por 43</button>
      </div>
    );

  }
}

export default App;

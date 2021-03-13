import React from 'react';
import './App.css';
import MostrarChar from './MostrarChar/MostrarChar';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponents from './CharComponents/CharComponents';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MostrarChar: [
        { texto: '', nchars: ''},
      ],
      charcomponents: [],
    }
  }

  modificartexto = (event) => {
    if(event.target.value.charAt(this.state.MostrarChar[0].texto.length)!=''){
      this.setState({
        MostrarChar: [
          { texto: event.target.value , nchars: this.state.MostrarChar[0].texto.length +1 }
        ] 
      })
    let chars = [...this.state.charcomponents];
    let newchar=[...chars,
      {char: event.target.value.charAt(this.state.MostrarChar[0].texto.length)}
      //{char:this.state.MostrarChar[0].texto.charAt(this.state.MostrarChar[0].texto.length)}
    ]
      this.setState({charcomponents: newchar});
    }else{
      this.setState({
        MostrarChar: [
          { texto: event.target.value , nchars: this.state.MostrarChar[0].texto.length -1 }
        ] 
      })
      let chars = [...this.state.charcomponents];
    chars.splice(this.state.MostrarChar[0].texto.length-1, 1);
    //personas[id].nombre = 'Borrado';
    this.setState({ charcomponents: chars });

    }

  }

  mostrarchar = () => {
    this.setState({
      MostrarChar: [
        {texto: this.state.MostrarChar[0].texto, nchars: this.state.MostrarChar[0].texto.length }
      ]
    })
  }
 

 // add = () => {
    //let chars = [...this.state.charcomponents];
    //let newchar=[...chars,
      //{char: event.target.value.charAt(this.state.MostrarChar[0].texto.length)}
      //{char:this.state.MostrarChar[0].texto.charAt(this.state.MostrarChar[0].texto.length)}
    //]
      //this.setState({charcomponents: newchar});
  //}
  
  borrar = (id) => {
    let chars = [...this.state.charcomponents];
    chars.splice(id, 1);
    //personas[id].nombre = 'Borrado';
    this.setState({ charcomponents: chars });

      let text = [...this.state.MostrarChar[0].texto];
      text.splice(id, 1);
      this.setState({
      MostrarChar: [
        {texto: text, nchars: this.state.MostrarChar[0].texto.length-1 }
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
   
   let listachar = null;
  
   listachar = (
    <CharComponents
      chars={this.state.charcomponents}
      add={this.add}
      ev={this.modificartexto}
      texto={this.state.MostrarChar[0].texto}
      borra={this.borrar}
      />
  )
    
    return (
      <div className="App">
        <h1>Caracteres</h1>
        <MostrarChar
          texto={this.state.MostrarChar[0].texto}
          nchars={this.state.MostrarChar[0].nchars}
          click={() => this.mostrarchar()} />

          <input type="text" onChange={this.modificartexto} value={this.state.MostrarChar[0].texto}/>

        <ValidationComponent
           resultado={this.state.MostrarChar[0].texto.length}
        />
        {listachar}
      </div>
    );

  }
}

export default App;

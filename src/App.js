import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.state = {
      values: {
        letra1: '',
        letra2: '',
        letra3: '',
        letra4: '',
        letra5: '',

      },
      validations: {
        letra1: '',
        letra2: '',
        letra3: '',
        letra5: '',
      }
    }
  }
  
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      }
    })
  }


  
  render () {
    const { name, letra1, letra2, letra3, letra4, letra5} = this.state.values
    const { 
      name: nameVal, 
      letra1: letra1Val,
      letra2: letra2Val, 
      letra3: letra3Val,
      letra4: letra4Val,  
      letra5: letra5Val,
    } = this.state.validations
    
    return (
      <div className="container">
         <h1>INGRESA LA PALABRAS</h1>
         <form onSubmit={this.handleSubmit}>
         
          
          <div>
            <label> Primera palabra :
              <input 
                type="text"
                name="letra1"
                value={letra1} 
                onChange={this.handleChange} 
              />
            </label>
            <div>{letra1Val}</div>
          </div>
          <div>
            <label> Segunda palabra <ln/>
              <input 
                type="text"
                name="letra2"
                value={letra2} 
                onChange={this.handleChange} 
              />
            </label>
            <div>{letra2Val}</div>
          </div>

          <div>
            <label> Tercera palabra :
              <input 
                type="text"
                name="letra3"
                value={letra3} 
                onChange={this.handleChange} 
              />
            </label>
            <div>{letra3Val}</div>
          </div>

          <div>
            <label> Cuarta palabra: 
              <input 
                type="text"
                name="letra4"
                value={letra4} 
                onChange={this.handleChange} 
              />
            </label>
            <div>{letra4Val}</div>
          </div>

        </form>
        <h2>sopa de letras</h2>
        <div className="cuadro">
          <div className="container">
            <p>{JSON.stringify(this.state.values)}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

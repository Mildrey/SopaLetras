import React, { Component } from 'react';
import {Entropy} from 'entropy-string'
import logo from './logo.svg';
import './App.css';
import SopaLetras from './SopaLetras';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     items:[], 
     items2:[],
     items3:[],
     items4:[],
     text:'',
     text2:'',
     text3:'',
     text4:'',
     };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangetext2 = this.handleChangetext2.bind(this);
    this.handleChangetext2 = this.handleChangetext2.bind(this);
    this.handleChangetext2 = this.handleChangetext2.bind(this);
  }
  
  handleChange = (e) => {
    this.setState({ text: e.target.value});
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
  }

  handleChangetext2 = (e) =>{
    this.setState({ text2: e.target.value});
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
  }

  handleChangetext3 = (e) =>{
    this.setState({ text3: e.target.value});
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
  }

  handleChangetext4 = (e) =>{
    this.setState({ text4: e.target.value});
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }
  }

  handleSubmit = (e) => {
      e.preventDefault();   
 
      this.setState(state => ({
      items: this.state.text,
      items2: this.state.text2,
      items3: this.state.text3,
      items4:this.state.text4,
      }));
  }

  

  render() {  
    return (    
      <div className="container">
        <h3>Sopa de letras</h3>       
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="new-todo">
                ingrese la palabra 
              </label>
              <input
                id="new-todo"
                maxLength = "6"
                className="form-control col-sm-6 col-md-6 col-lg-2" 
                onChange={this.handleChange}
                value={this.state.text}
              />
                <br/>
              <input
                id="new-todo"
                maxLength = "5"
                className="form-control col-sm-6 col-md-6 col-lg-2" 
                onChange={this.handleChangetext2}
                value={this.state.text2}
               />
                 <br/>
              <input
                id="new-todo"
                maxLength = "5"
                className="form-control col-sm-6 col-md-6 col-lg-2" 
                onChange={this.handleChangetext3}
                value={this.state.text3}
               />
                 <br/>
              <input
                id="new-todo"
                maxLength = "5"
                className="form-control col-sm-6 col-md-6 col-lg-2" 
                onChange={this.handleChangetext4}
                value={this.state.text4}
              />
              <button className="btn btn-success">
                 Añadir
              </button>
            </div>
          </form>
        <SopaLetras 
          items={this.state.items} 
          items2={this.state.items2}
          items3={this.state.items3} 
          items4={this.state.items4}
        /> 
      </div>
    );
  }  
}

export default App;

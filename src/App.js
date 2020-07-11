import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SopaLetras from './SopaLetras';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     items: [], 
     text: 'qwesopadeletra',
     textRever: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
      this.setState({ text: e.target.value});
      if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
      }
    }

  handleSubmit(e) {
      e.preventDefault();

      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
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
                maxLength = "14"
                className="form-control col-sm-6 col-md-6 col-lg-2" 
                onChange={this.handleChange}
                value={this.state.text}
              />

              <button className="btn btn-success">
                Añadir
              </button>
            </div>
        </form>
        <SopaLetras items={this.state.items} />
      </div>
    );
  }

  
}

export default App;

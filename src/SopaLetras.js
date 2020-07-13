import React, { Component } from 'react'


class SopaLetras extends React.Component {
  render() {
  	const { Entropy, charset64 } = require('entropy-string')
    const entropy = new Entropy({ total: 9, risk: 9, charset: charset64 })
    const strings = Array(5).fill('').map(e => entropy.string())
    return (
      <div className="cuadro">
        <div className="container">
	          {this.props.items.map(item => (
	          <h1 key={item.id}>{strings}{item.text}{strings}</h1>
	        ))}
	      </div>
	    </div>
    );
  }
}

export default SopaLetras;
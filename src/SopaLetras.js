import React, { Component } from 'react'


class SopaLetras extends React.Component {
  render() {
    return (
      <div className="cuadro">
	        {this.props.items.map(item => (
	          <h1 key={item.id}>{item.text}{item.textRever}</h1>

	        ))}

	    </div>
    );
  }
}

export default SopaLetras;
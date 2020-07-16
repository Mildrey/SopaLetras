import React, { Component } from 'react'


class SopaLetras extends React.Component {
 
  render() {

    var nuevoArray = new Array(10);
    /* --- INPUT1 ----*/
    var variableInput = this.props.items
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;


    for ( var i = 0; i <= 10 ; i++ ) {  //crea un array de  10x10
      nuevoArray[i] = new Array(10)
    }

    for (var i = 0; i <10; i++) {  // llena el array con letras aleatoreas
      for (var j = 0; j < 10; j++) {
        nuevoArray[i][j]= characters.charAt(Math.floor(Math.random() * charactersLength));
        console.log(nuevoArray[i][j])
      }   
    }
    for(var i=0;i<variableInput.length;i++){   // divide las palabra en letras
      for (var j = 0; j < variableInput.length; j++) {
         nuevoArray[i][6]= variableInput.slice(i,i+1)
      }
    }
    
    return (
      <div>
        {
          nuevoArray.map((row, i) => (
            <div key={i} className="row row-cols-10">
                {row.map((letra, j) => (<div className="col border" key={j}>{letra}</div>))}
           </div>
          ))
        }
      </div>
    );
  }
}

export default SopaLetras;
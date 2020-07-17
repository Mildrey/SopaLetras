import React, { Component } from 'react'


class SopaLetras extends React.Component {
 
  render() {

   var nuevoArray = new Array(10);
    /* --- INPUT1 ----*/

    var variableInput = this.props.items
    var input = variableInput.toString()
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
   
  var x = Math.round(Math.random()*9) // le damos un numero random a la variable x
  var y = Math.round(Math.random()*5) // le damos un numero random a la variable y
  var numerador = 0  // 
  var numeroRandom = Math.round(Math.random()*1) 

  if (numeroRandom ==1 ) {              // posicion random de derecha-izquierda y de izquierda-derecha
    for(var i=y; i<= input.length+y; i++){
      for (var j = x; i < input.length+y; i++) {
        nuevoArray[j][i] = input.charAt(numerador)
        numerador++
      }
    }
  }
  else{
    for (var i = input.length + y; i >= y; i--) {
      for (var j = input.length + y; j >= y ; j--) {
           nuevoArray[i][j] = input.charAt(numerador)
           numerador++
      }
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
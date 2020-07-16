import React, { Component } from 'react'


class SopaLetras extends React.Component {
 
  render() {
   var nuevoArray = new Array(10);

    /* --- INPUT1 ----*/
    var arrayPalabara = []
    var variableInput = this.props.items
    
    for(var i=0;i<variableInput.length;i++){   // divide las palabra en letras
      var letra = variableInput.slice(i,i+1)
      arrayPalabara.push(letra)
      console.log(arrayPalabara[i])
    }

    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    var p=0;

    for ( var i = 0; i <= 10 ; i++ ) {  //crea un array de  10x10
      nuevoArray[i] = new Array(10)
    }

    for (var i = 0; i <10; i++) {  // llena el array con letras aleatoreas
      for (var j = 0; j < 10; j++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        nuevoArray[i][j] =result.slice(j,j+1)
        console.log(nuevoArray[i][j])
      }   
    }

    
    return (
      <div>
        {
          nuevoArray.map((object, i) => (
            <div key={i} className="row row-cols-10">
                {object.map((letra, j) => (<div className="col border" key={j}>{letra}</div>))}
           </div>
          ))
        }
      </div>
    );
  }
}

export default SopaLetras;
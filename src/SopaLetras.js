import React, { Component } from "react";

class SopaLetras extends React.Component {
  render() {
    var anchosopa = 16;
    var altosopa = 16;

    var nuevoArray = new Array(altosopa);
    /* --- INPUT1 ----*/

    var variableInput = this.props.items;
    var variableInput2 = this.props.items2;
    var variableInput3 = this.props.items3;
    var variableInput4 = this.props.items4;

    var input = variableInput.toString();
    var input2 = variableInput2.toString();
    var input3 = variableInput3.toString();
    var input4 = variableInput4.toString();

    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charactersLength = characters.length;

    for (var i = 0; i <= altosopa; i++) {
      //crea un array de  10x10
      nuevoArray[i] = new Array(anchosopa);
    }

    for (var i = 0; i < altosopa; i++) {
      // llena el array con letras aleatoreas
      for (var j = 0; j < anchosopa; j++) {
        nuevoArray[i][j] = characters.charAt(Math.floor(Math.random() * charactersLength));
        console.log(nuevoArray[i][j]);
      }
    }

    var numerador = 0; //
    var numeroRandom = Math.round(Math.random() * 1);

    var posicioninicialy = 0;
    var posicioninicialy=0;
    var posicioninicialx = 0;

    // posicion random de derecha-izquierda posicioninicialy de izquierda-derecha
    if (numeroRandom == 1) {
    //izquierda a derecha (horizontal)
    posicioninicialx = Math.round(Math.random() * ( input.length + anchosopa)); // le damos un numero random a la variable posicioninicialx
    posicioninicialy = Math.round(Math.random() * altosopa); // le damos un numero random a la variable posicioninicialy
      for (var i = 0; i < input.length; i++) {
        nuevoArray[posicioninicialy][posicioninicialx + i] = input.charAt(i);
      }
    }else{
      //derecha  a izquierda (horizontal)
     posicioninicialx = Math.round(Math.random() * ( input.length + anchosopa)); // le damos un numero random a la variable posicioninicialx
     posicioninicialy = Math.round(Math.random() * altosopa); // le damos un numero random a la variable posicioninicialy
      for (var i = 0; i < input.length; i++) {
        nuevoArray[posicioninicialy][posicioninicialx - i] = input.charAt(i);
      }
    }
     // posicion random de derecha-izquierda posicioninicialy de izquierda-derecha
    if (numeroRandom == 1) {
     //arriba  a bajo (vertical)
      posicioninicialx = Math.round(Math.random() * 9); // le damos un numero random a la variable posicioninicialx
      posicioninicialy = Math.round(Math.random() * altosopa); // le damos un numero random a la variable posicioninicialy
      for (var i = 0; i < input2.length; i++) {
       nuevoArray[posicioninicialx + i][posicioninicialy] = input2.charAt(i);
      }
    }else{
      //abajo a arriba (vertical)
      posicioninicialx = Math.round(Math.random() *( input.length + 9)); // le damos un numero random a la variable posicioninicialx
      posicioninicialy = Math.round(Math.random() * altosopa); // le damos un numero random a la variable posicioninicialy
      for (var i = 0; i < input2.length; i++) {
        nuevoArray[posicioninicialx - i ][posicioninicialy] = input2.charAt(i);
      }
    }
    
    if (numeroRandom == 1) {
      // arriba a abajo  (diagonal)
      posicioninicialx = Math.round(Math.random() * ( anchosopa + input3.length)); // le damos un numero random a la variable posicioninicialx
      posicioninicialy = Math.round(Math.random() * altosopa); // le damos un numero random a la variable posicioninicialy
      for (var i = 0; i < input3.length; i++) {
       nuevoArray[posicioninicialx + i][posicioninicialy + i] = input3.charAt(i);
      }
    }else{
     //abajo a arriba (diagonal)
      posicioninicialx = Math.round(Math.random() * ( anchosopa + input3.length)); // le damos un numero random a la variable posicioninicialx
      posicioninicialy = Math.round(Math.random() * altosopa); // le damos un numero random a la variable posicioninicialy
      for (var i = 0; i < input3.length; i++) {
       nuevoArray[posicioninicialx - i][posicioninicialy - i] = input3.charAt(i);
      }
    }
     

    return (
      <div>
        {nuevoArray.map((row, i) => (
          <div key={i} className="row row-cols-10">
            {row.map((letra, j) => (
              <div className="col border" key={j}>
                {letra}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default SopaLetras;
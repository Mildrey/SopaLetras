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

    var input = variableInput.toString().toUpperCase();
    var input2 = variableInput2.toString().toUpperCase();
    var input3 = variableInput3.toString().toUpperCase();
    var input4 = variableInput4.toString().toUpperCase();

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

    var numero1= Math.round(Math.random() * 1);
    var numero2= Math.round(Math.random() * 1);
    var numero3= Math.round(Math.random() * 1);
   

    var posicioninicialy = 0;
    var posicioninicialy=0;
    var posicioninicialx = 0;

    // posicion random de derecha-izquierda posicioninicialy de izquierda-derecha
   if (numero1 >= 1) {
    //izquierda a derecha (horizontal)
    posicioninicialx = Math.round(Math.random() * ( input.length + anchosopa)); // le damos un numero random a la variable posicioninicialx
    posicioninicialy = Math.round(Math.random() * altosopa); // le damos un numero random a la variable posicioninicialy
      for (var i = 0; i < input.length; i++) {
        nuevoArray[posicioninicialy][posicioninicialx + i] = input.charAt(i);
      }
    }else if(numero1 === 0){
      //derecha  a izquierda (horizontal)
     posicioninicialx = Math.round(Math.random() * ( input.length + anchosopa)); // le damos un numero random a la variable posicioninicialx
     posicioninicialy = Math.round(Math.random() * altosopa); // le damos un numero random a la variable posicioninicialy
      for (var i = 0; i < input.length; i++) {
        nuevoArray[posicioninicialy][posicioninicialx - i] = input.charAt(i);
      }
    }
     // posicion random de derecha-izquierda posicioninicialy de izquierda-derecha
    if (numero2 === 1) {
     //arriba  a bajo (vertical)
      posicioninicialx = Math.round(Math.random() * ( input2.length + anchosopa)); // le damos un numero random a la variable posicioninicialx
      posicioninicialy = Math.round(Math.random() * altosopa); // le damos un numero random a la variable posicioninicialy
      for (var i = 0; i < input2.length; i++) {
       nuevoArray[posicioninicialx + i][posicioninicialy] = input2.charAt(i);
      }
    }else if(numero2 === 0){
      //abajo a arriba (vertical)
      posicioninicialx = Math.round(Math.random() * ( input2.length + anchosopa)); // le damos un numero random a la variable posicioninicialx
      posicioninicialy = Math.round(Math.random() * altosopa); // le damos un numero random a la variable posicioninicialy
      for (var i = 0; i < input2.length; i++) {
        nuevoArray[posicioninicialx - i ][posicioninicialy] = input2.charAt(i);
      }
    }

    if (numero3 === 1) {
      // arriba a abajo  (diagonal)
      posicioninicialx = Math.round(Math.random() * ( input3.length + anchosopa)); // le damos un numero random a la variable posicioninicialx
      posicioninicialy = Math.round(Math.random() * altosopa); // le damos un numero random a la variable posicioninicialy   

      for (var i = 0; i < input3.length; i++) {
       nuevoArray[posicioninicialx + i][posicioninicialy + i] = input3.charAt(i);
      }
    }else if(numero3 === 0){
     //abajo a arriba (diagonal)
      posicioninicialx = Math.round(Math.random() *( input3.length + anchosopa)); // le damos un numero random a la variable posicioninicialx
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
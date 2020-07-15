import React, { Component } from 'react'


class SopaLetras extends React.Component {
	   
  render() {
      var nuevoArray = new Array(10);
      nuevoArray[0] = new Array('Q','W','7','R','A','G','T','U','P','Y','O');
      nuevoArray[1] = new Array('A','O','S','F','Q','H','J','X','C','M','Z');
      nuevoArray[2] = new Array('Z','X','C','V','N','M','A','S','D','F','G');
      nuevoArray[3] = new Array('U','I','O','P','Ñ','L','K','J','P','J','H');
      nuevoArray[4] = new Array('Y','T','R','E','W','Q','A','S','D','F','G');
      nuevoArray[5] = new Array('O','W','Q','R','D','X','B','C','T','U','T');
      nuevoArray[6] = new Array('Q','F','E','R','R','T','Y','U','P','Y','O');
      nuevoArray[7] = new Array('Y','T','R','E','W','Q','A','S','D','F','G');
      nuevoArray[8] = new Array('P','P','Z','P','P','P','p','P','P','Y','O');
      nuevoArray[9] = new Array('Q','W','E','R','R','T','Y','U','P','Y','O');
      nuevoArray[10]= new Array('U','I','O','P','Ñ','L','K','J','P','J','H');


      /* --- INPUT1 ----*/
      var inputU1 = this.props.items
      var inputU2 = this.props.items
      var inputU3 = this.props.items
      var inputU4 = this.props.items
      var inputU5 = this.props.items

      nuevoArray[0][4]= inputU1.slice(0,1)
      nuevoArray[0][5]= inputU2.slice(1,2)
      nuevoArray[0][6]= inputU3.slice(2,3)
      nuevoArray[0][7]= inputU4.slice(3,4)
      nuevoArray[0][8]= inputU5.slice(4,5)
      nuevoArray[0][9]= inputU5.slice(5,6)

      /* --- INPUT 2 ----*/
      var inputD1 = this.props.items2
      var inputD2 = this.props.items2
      var inputD3 = this.props.items2
      var inputD4 = this.props.items2
      var inputD5 = this.props.items2

      nuevoArray[1][1]= inputD1.slice(0,1)
      nuevoArray[2][1]= inputD2.slice(1,2)
      nuevoArray[3][1]= inputD3.slice(2,3)
      nuevoArray[4][1]= inputD4.slice(3,4)
      nuevoArray[5][1]= inputD5.slice(4,5)

      /* --- INPUT3 ----*/
      var inputT1 = this.props.items3
      var inputT2 = this.props.items3
      var inputT3 = this.props.items3
      var inputT4 = this.props.items3
      var inputT5 = this.props.items3

      nuevoArray[9][4]= inputT1.slice(0,1)
      nuevoArray[8][5]= inputT2.slice(1,2)
      nuevoArray[7][6]= inputT3.slice(2,3)
      nuevoArray[6][7]= inputT4.slice(3,4)
      nuevoArray[5][8]= inputT5.slice(4,5)

      /* --- INPUT4 ----*/
      var inputC1 = this.props.items4
      var inputC2 = this.props.items4
      var inputC3 = this.props.items4
      var inputC4 = this.props.items4
      var inputC5 = this.props.items4

      nuevoArray[10][8]= inputC1.slice(0,1)
      nuevoArray[9][8]= inputC2.slice(1,2)
      nuevoArray[8][8]= inputC3.slice(2,3)
      nuevoArray[7][8]= inputC4.slice(3,4)
      nuevoArray[6][8]= inputC5.slice(4,5)

    return (
      <div> 
	      <div className="row row-cols-10">
          <div className="col border">{nuevoArray[0][0]}</div>
          <div className="col border">{nuevoArray[0][1]}</div>
          <div className="col border">{nuevoArray[0][2]}</div>
          <div className="col border">{nuevoArray[0][3]}</div>
          <div className="col border">{nuevoArray[0][4]}</div>
          <div className="col border">{nuevoArray[0][5]}</div>
          <div className="col border">{nuevoArray[0][6]}</div>
          <div className="col border">{nuevoArray[0][7]}</div>
          <div className="col border">{nuevoArray[0][8]}</div>
          <div className="col border">{nuevoArray[0][9]}</div>
          <div className="col border">{nuevoArray[0][10]}</div>         
          </div>
        <div className="row row-cols-10">
            <div className="col border">{nuevoArray[1][0]}</div>
            <div className="col border">{nuevoArray[1][1]}</div>
            <div className="col border">{nuevoArray[1][2]}</div>
            <div className="col border">{nuevoArray[1][3]}</div>
            <div className="col border">{nuevoArray[1][4]}</div>
            <div className="col border">{nuevoArray[1][5]}</div>
             <div className="col border">{nuevoArray[1][6]}</div>
             <div className="col border">{nuevoArray[1][7]}</div>
             <div className="col border">{nuevoArray[1][8]}</div>
             <div className="col border">{nuevoArray[1][9]}</div>
             <div className="col border">{nuevoArray[1][10]}</div>         
        </div>
        <div className="row row-cols-10">
             <div className="col border">{nuevoArray[2][0]}</div>
             <div className="col border">{nuevoArray[2][1]}</div>
             <div className="col border">{nuevoArray[2][2]}</div>
             <div className="col border">{nuevoArray[2][3]}</div>
             <div className="col border">{nuevoArray[2][4]}</div>
             <div className="col border">{nuevoArray[2][5]}</div>
             <div className="col border">{nuevoArray[2][6]}</div>
             <div className="col border">{nuevoArray[2][7]}</div>
             <div className="col border">{nuevoArray[2][8]}</div>
             <div className="col border">{nuevoArray[2][9]}</div>
             <div className="col border">{nuevoArray[2][10]}</div>         
        </div>
        <div className="row row-cols-10">
             <div className="col border">{nuevoArray[3][0]}</div>
             <div className="col border">{nuevoArray[3][1]}</div>
             <div className="col border">{nuevoArray[3][2]}</div>
             <div className="col border">{nuevoArray[3][3]}</div>
             <div className="col border">{nuevoArray[3][4]}</div>
             <div className="col border">{nuevoArray[3][5]}</div>
             <div className="col border">{nuevoArray[3][6]}</div>
             <div className="col border">{nuevoArray[3][7]}</div>
             <div className="col border">{nuevoArray[3][8]}</div>
             <div className="col border">{nuevoArray[3][9]}</div>
             <div className="col border">{nuevoArray[3][10]}</div>         
        </div>
        <div className="row row-cols-10">
             <div className="col border">{nuevoArray[4][0]}</div>
             <div className="col border">{nuevoArray[4][1]}</div>
             <div className="col border">{nuevoArray[4][2]}</div>
             <div className="col border">{nuevoArray[4][3]}</div>
             <div className="col border">{nuevoArray[4][4]}</div>
             <div className="col border">{nuevoArray[4][5]}</div>
             <div className="col border">{nuevoArray[4][6]}</div>
             <div className="col border">{nuevoArray[4][7]}</div>
             <div className="col border">{nuevoArray[4][8]}</div>
             <div className="col border">{nuevoArray[4][9]}</div>
             <div className="col border">{nuevoArray[4][10]}</div>         
        </div>
        <div className="row row-cols-10">
             <div className="col border">{nuevoArray[5][0]}</div>
             <div className="col border">{nuevoArray[5][1]}</div>
             <div className="col border">{nuevoArray[5][2]}</div>
             <div className="col border">{nuevoArray[5][3]}</div>
             <div className="col border">{nuevoArray[5][4]}</div>
             <div className="col border">{nuevoArray[5][5]}</div>
             <div className="col border">{nuevoArray[5][6]}</div>
             <div className="col border">{nuevoArray[5][7]}</div>
             <div className="col border">{nuevoArray[5][8]}</div>
             <div className="col border">{nuevoArray[5][9]}</div>
             <div className="col border">{nuevoArray[5][10]}</div>         
        </div>
        <div className="row row-cols-10">
             <div className="col border">{nuevoArray[6][0]}</div>
             <div className="col border">{nuevoArray[6][1]}</div>
             <div className="col border">{nuevoArray[6][2]}</div>
             <div className="col border">{nuevoArray[6][3]}</div>
             <div className="col border">{nuevoArray[6][4]}</div>
             <div className="col border">{nuevoArray[6][5]}</div>
             <div className="col border">{nuevoArray[6][6]}</div>
             <div className="col border">{nuevoArray[6][7]}</div>
             <div className="col border">{nuevoArray[6][8]}</div>
             <div className="col border">{nuevoArray[6][9]}</div>
             <div className="col border">{nuevoArray[6][10]}</div>         
        </div>
        <div className="row row-cols-10">
             <div className="col border">{nuevoArray[7][0]}</div>
             <div className="col border">{nuevoArray[7][1]}</div>
             <div className="col border">{nuevoArray[7][2]}</div>
             <div className="col border">{nuevoArray[7][3]}</div>
             <div className="col border">{nuevoArray[7][4]}</div>
             <div className="col border">{nuevoArray[7][5]}</div>
             <div className="col border">{nuevoArray[7][6]}</div>
             <div className="col border">{nuevoArray[7][7]}</div>
             <div className="col border">{nuevoArray[7][8]}</div>
             <div className="col border">{nuevoArray[7][9]}</div>
             <div className="col border">{nuevoArray[7][10]}</div>         
        </div>
        <div className="row row-cols-10">
             <div className="col border">{nuevoArray[8][0]}</div>
             <div className="col border">{nuevoArray[8][1]}</div>
             <div className="col border">{nuevoArray[8][2]}</div>
             <div className="col border">{nuevoArray[8][3]}</div>
             <div className="col border">{nuevoArray[8][4]}</div>
             <div className="col border">{nuevoArray[8][5]}</div>
             <div className="col border">{nuevoArray[8][6]}</div>
             <div className="col border">{nuevoArray[8][7]}</div>
             <div className="col border">{nuevoArray[8][8]}</div>
             <div className="col border">{nuevoArray[8][9]}</div>
             <div className="col border">{nuevoArray[8][10]}</div>         
        </div>
        <div className="row row-cols-10">
             <div className="col border">{nuevoArray[9][0]}</div>
             <div className="col border">{nuevoArray[9][1]}</div>
             <div className="col border">{nuevoArray[9][2]}</div>
             <div className="col border">{nuevoArray[9][3]}</div>
             <div className="col border">{nuevoArray[9][4]}</div>
             <div className="col border">{nuevoArray[9][5]}</div>
             <div className="col border">{nuevoArray[9][6]}</div>
             <div className="col border">{nuevoArray[9][7]}</div>
             <div className="col border">{nuevoArray[9][8]}</div>
             <div className="col border">{nuevoArray[9][9]}</div>
             <div className="col border">{nuevoArray[9][10]}</div>         
         </div>
         <div className="row row-cols-10">
             <div className="col border">{nuevoArray[10][0]}</div>
             <div className="col border">{nuevoArray[10][1]}</div>
             <div className="col border">{nuevoArray[10][2]}</div>
             <div className="col border">{nuevoArray[10][3]}</div>
             <div className="col border">{nuevoArray[10][4]}</div>
             <div className="col border">{nuevoArray[10][5]}</div>
             <div className="col border">{nuevoArray[10][6]}</div>
             <div className="col border">{nuevoArray[10][7]}</div>
             <div className="col border">{nuevoArray[10][8]}</div>
             <div className="col border">{nuevoArray[10][9]}</div>
             <div className="col border">{nuevoArray[10][10]}</div>         
        </div>
	    </div>
    );
  }
}

export default SopaLetras;

var newP = document.getElementById('new-comment');
var divContainer = document.getElementsByClassName('container-comments');
var btnLg = document.getElementById('btn-lg');
var btnMd = document.getElementById('btn-md');
var btnSm = document.getElementById('btn-sm');
var btnColor =document.getElementById('btn-color');
var btnBackground = document.getElementById('btn-background');
var btnLeft = document.getElementById('btn-left');
var btnCenter = document.getElementById('btn-center');
var btnRigth = document.getElementById('btn-rigth');
var btnSend = document.getElementById('send');

var datos = []

function changeSize(e){
       newP.style.fontSize = "2em";


}
btnLg.addEventListener('click', changeSize);

function alingComment(e){
    newP.style.textAlign = 'center';

}
 btnCenter.addEventListener('click', alingComment);

 function changeColor(e){
     var valColor = prompt('Ingresa un color');
     newP.style.color= valColor; 
 }
  btnColor.addEventListener('click',changeColor);

  function changeBack(e){
      var valBack = prompt('Elige un color');
      newP.style.backgroundColor = valBack;
  }
  btnBackground.addEventListener('click',changeBack);


  function newComment(e){
      var newParrafo = document.createElement('p');
       newParrafo.textContent = (newP.value);

        divContainer.appendChild(newParrafo);

  }
   btnSend.addEventListener('click',newComment);
// function newComment(event){
//     var txtParrafo = newP.value || '';
//       if(!txtParrafo || !txtParrafo.trim().length){
//           alert('Ingresa tu comentario');
//           return;
//       }
//       txtParrafo.value = '';


//     var newParrafo = document.createElement('p');

//     divContainer.appendChild(newParrafo);

// }
// btnSend.addEventListener('click',newComment);

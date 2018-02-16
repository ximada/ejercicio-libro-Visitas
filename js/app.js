// variables que  voy a utilizar en las funciones
var newP = document.getElementById('new-comment');
var divContainer = document.getElementsByClassName('container-comments');
var btnLg = document.getElementById('btn-lg');
var btnMd = document.getElementById('btn-md');
var btnSm = document.getElementById('btn-sm');
var btnColor =document.getElementById('btn-color');
var btnBackground = document.getElementById('btn-background');
var btnLeft = document.getElementById('btn-left');
var btnCenter = document.getElementById('btn-center');
var btnRight = document.getElementById('btn-rigth');
var btnSend = document.getElementById('send');
var pTimeReal = document.getElementById('container-timerealComment');

var datos = []

console.log(newP.value);
//   crear el elemnto <p>
var newParrafo = document.createElement('p');
  pTimeReal.appendChild(newParrafo);

  function newComment(e){
    event.preventDefault()
       newParrafo.textContent = newP.value;
  }
   newP.addEventListener('keyup', newComment);

// funciones para cambiar el estilo del parrafo
function changeSizeLg(e){
    newParrafo.style.fontSize = "3em";
}
btnLg.addEventListener('click', changeSizeLg);

function changeSizeMediun(e){
    newParrafo.style.fontSize ='2em'
}
btnMd.addEventListener('click', changeSizeMediun);

function changeSizeSmall(e){
    newParrafo.style.fontSize = '1em'
}
btnSm.addEventListener('click', changeSizeSmall);

function alingCommentCenter(e){
    newParrafo.style.textAlign = 'center';

}
 btnCenter.addEventListener('click', alingCommentCenter);

 

 function changeColor(e){
     var valColor = prompt('Ingresa un color');
     newParrafo.style.color= valColor; 
 }
  btnColor.addEventListener('click',changeColor);

  function changeBack(e){
      var valBack = prompt('Elige un color');
      newParrafo.style.backgroundColor = valBack;
  }
  btnBackground.addEventListener('click',changeBack);

  

   function alingCommentCenter(e){
    newParrafo.style.textAlign = 'center';
    

}
 btnCenter.addEventListener('click', alingCommentCenter);

 function alingCommentLeft(){
    newParrafo.style.textAlign = 'left'
 }
  btnLeft.addEventListener('click', alingCommentLeft);

  function alingCommentRight(e){
    newParrafo.style.textAlign = 'right'
  }
  btnRight.addEventListener('click', alingCommentRight);


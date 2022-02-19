//añadir el botón de eliminar
let myNodeList = document.getElementsByTagName("LI");
let i;
for (i= 0; i < myNodeList.length; i++){
    let span = document.createElement("SPAN");
    let picto = document.createElement("I");
    span.className ="delete";
    picto.className = "fa-solid fa-circle-minus";
    span.appendChild(picto);
    myNodeList[i].appendChild(span);
}
//activar el botón de eliminar
let borrar = document.getElementsByClassName("delete");
for (i= 0; i< borrar.length; i++){
    borrar[i].onclick = function(){
        let item = this.parentElement;
        item.style.display = "none";
    }
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Hey, escribe algo!");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    let span = document.createElement("SPAN");
    let picto = document.createElement("I");
    span.className ="delete";
    picto.className = "fa-solid fa-circle-minus";
    span.appendChild(picto);
    li.appendChild(span);
    for (i = 0; i < borrar.length; i++) {
        borrar[i].onclick = function() {
          let item = this.parentElement;
          item.style.display = "none";
        }
      }
      }
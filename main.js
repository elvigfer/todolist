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
  
      }
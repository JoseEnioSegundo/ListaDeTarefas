let botao = document.getElementById("add");

botao.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Foi");

  let campo = document.querySelector("input");
  let lista = document.querySelector("#lista");
  let item = document.createElement("li");

  item.innerHTML =
    "<span class='texto'>" +
    campo.value +
    "</span> <span class='remover'>Delete</span> <span class='editar'>Edit</span>";

  lista.appendChild(item);
  console.log(item);
  console.log("message");

  item.addEventListener("click", function (evt) {
    let elemento = evt.target;
    console.log(elemento.className);
    if (elemento.className == "remover") {
        elemento.parentElement.remove();
    } else if (elemento.className == "editar"){
        elemento.parentElement.querySelector(".texto").contentEditable = true;
        elemento.parentElement.querySelector(".texto").focus();

    
    }
  });
});

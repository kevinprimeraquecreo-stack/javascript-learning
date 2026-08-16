let metas = document.querySelector("#tarea-input");
let agregar = document.querySelector("#btn-agregar");
let lista = document.querySelector("#lista-metas")

agregar.addEventListener("click" , () => {
    if (metas.value.trim() !== "") {
    let nuevo = document.createElement("li");
    nuevo.innerText = metas.value;
    lista.appendChild(nuevo);
    metas.value = "";
    }
})
let listacompras = document.querySelector("#Lista-compras");
let boton = document.querySelector("#Agregar");
let contador = 1;

boton.addEventListener ("click", () => {
    if (contador <= 5 ) {
    const lista = document.createElement("li");  //sirve para crear un nuevo elemeto, en algo q este vacio
    lista.innerText = "Compra #" + contador;
    listacompras.style.color = "green";
    listacompras.appendChild(lista); //Metes la variable donde tenias el id 
    //de donde vas a meter lo que deseas
    // y al final metes el nuevo elemeto que estas creando, en este caso el li
    contador++;}
    else{
        console.log("Llegaste al limite de compras!")
    }
})




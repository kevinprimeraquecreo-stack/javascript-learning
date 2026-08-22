// Edabit - How Much is True?
function countTrue(arr) {
    let contador = 0;

    arr.forEach(element => {
    if (element === true) {
    contador += 1;
    }
    });

    return contador;
}

// Prueba local en la terminal de VS Code
console.log(countTrue([true, false, false, true, false])); 


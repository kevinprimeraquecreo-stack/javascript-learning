const botones = document.querySelectorAll(".btn"); 
const cambiar = document.querySelector("#message");
const puntosJ = document.querySelector("#user-score");
const puntosCPU = document.querySelector("#cpu-score");
const boton = document.querySelector("#reset-btn");
let jugador = 0;
let Computadora = 0;

const options = ["rock",
    "paper" , 
    "scissors"
];


function CPU(maquina){
    const numeros = Math.floor(Math.random () * 3);
    return options[numeros];
}

function determinar (usuario, Cpu){
    if(usuario === Cpu) {
        return "Es un empate!"
    }
    else if (
        (usuario === "rock" && Cpu === "scissors") ||
        (usuario === "paper" && Cpu === "rock") ||
        (usuario === "scissors" && Cpu === "paper")
    ) {
        
        return "Gano el usuario!"
    }
    else {
        return "Gano la maquina!"
    }
}


botones.forEach(boton => {
    boton.addEventListener("click", (e) => {
        const usuario = e.target.id;
        const Cpu = CPU();
        const resultado = determinar(usuario, Cpu);

        cambiar.textContent = `Tú has elegido: ${usuario} | la maquina ha elegido: ${Cpu}`;

        if (resultado === "Gano el usuario!") {
            jugador++;
        } else if (resultado === "Gano la maquina!") {
            Computadora++;
        }
        puntosJ.textContent = jugador;
        puntosCPU.textContent = Computadora;
    });
});


boton.addEventListener("click" , () => {
    let jugador = 0;
    let Computadora = 0;
    puntosJ.textContent = 0;
    puntosCPU.textContent = 0;
    cambiar.textContent = "Juego reiniciado! Elige tu jugada...";
})






const escribir = document.querySelector("#todo-input");
const agregar = document.querySelector("#btn");
const form = document.querySelector("#todo-form");
const lista = document.querySelector("#todo-list");
const all = document.querySelector('[data-filter="all"]');
const pending = document.querySelector('[data-filter="pending"]');
const completed = document.querySelector('[data-filter=completed]')

let filtro = "todas"

let tareas = JSON.parse(localStorage.getItem("misTareas")) || [];


function noduplicar (){
    lista.innerHTML = "" ; 

    let tareasFiltradas = tareas;
    //bucles//
    if(filtro === "todas") {
        tareasFiltradas = tareas;
    }

    else if(filtro === "pendientes"){
        tareasFiltradas = tareas.filter((p) => p.completada === false)
    }
        

    else if(filtro === "completadas"){
        tareasFiltradas = tareas.filter((c) => c.completada === true)
    }
 
   
    tareasFiltradas.forEach((tarea) => {
    const li = document.createElement("li");
    li.textContent = tarea.texto;

        if(tarea.completada) {
            li.style.textDecoration = "line-through";
        };

      const btn2 = document.createElement("button")
        btn2.textContent = "X";

        // evento 1 /S/
        btn2.addEventListener("click", (e) => {
            e.stopPropagation();
        tareas = tareas.filter((presionar) => presionar.id !== tarea.id); 
        noduplicar();
    });

        // evento 2 //
    li.addEventListener("click" , () => {
        tarea.completada = !tarea.completada;
        noduplicar();
    })

      lista.appendChild(li);
     li.appendChild(btn2);

    });

    localStorage.setItem("misTareas" , JSON.stringify(tareas));    

};

    function botonActivo (botonS){
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        botonS.classList.add("active;")
    }

    // escuchar al evento tareas//
        all.addEventListener("click" , (e) => {
            filtro = "todas";
            botonActivo(e.target);
                noduplicar();
        });

        pending.addEventListener("click", (e) => {
            filtro = "pendientes";
            botonActivo(e.target);
                noduplicar();
        })

        completed.addEventListener("click", (e) => {
            filtro = "completadas";
            botonActivo(e.target);
                noduplicar();
        })


form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    if (escribir.value.trim() === "")
    return;

    const datos = {
    id: Date.now(), 
    texto: escribir.value.trim(),
    completada: false
    };

    tareas.push(datos)
    noduplicar()
    escribir.value = "";    
});

noduplicar();

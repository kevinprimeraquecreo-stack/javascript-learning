    const form = document.querySelector("#search-form");
    const input = document.querySelector("#pokemon-input");
    const Message = document.querySelector("#status-message");
    const tarjeta = document.querySelector("#pokemon-card");
    const typesContainer = document.querySelector("#pokemon-types");
    const statsContainer = document.querySelector("#pokemon-stats");
    const image = document.querySelector("#pokemon-img");
    const pokemonName = document.querySelector("#pokemon-name");
    const pokemonId = document.querySelector("#pokemon-id");
    const btnPrev = document.querySelector("#btn-prev");
    const btnNext = document.querySelector("#btn-next");
    const historyList = document.querySelector("#historylist");

    let currentPokemonId = 1; // Variable para rastrear el ID 


                    let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

    async function fetchPokemon(pokemonName) {
        try {
            const answer = await fetch(`https://pokeapi.co/api/v2/pokemon/${String(pokemonName).toLowerCase()}`);
            if (!answer.ok) {
                throw new Error("Pokemon no encontrado")
                }
            
                    const data = await answer.json();
                    tarjeta.classList.remove("hidden");
                    Message.textContent = "";
                    currentPokemonId = data.id; // Actualizar el ID actual del Pokémon

                    if(!searchHistory.includes(data.name)){
                        searchHistory.push(data.name);
                    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
                    mostrarHistorial();
                    };
                    renderizar(data);
                } 

                    catch (error) {
                    Message.textContent = error.message;
                    tarjeta.classList.add("hidden");
                }
        }

        mostrarHistorial(); // Mostrar el historial al cargar la página

// Función para renderizar la información del Pokémon


                function renderizar (pokemoninfo) {
                    typesContainer.innerHTML = "";
                    statsContainer.innerHTML = "";
                    image.src = pokemoninfo.sprites.front_default; 
                    pokemonName.textContent = pokemoninfo.name;
                    pokemonId.textContent = `#${pokemoninfo.id}`;

                    pokemoninfo.types.forEach((item) => {
                        const span = document.createElement("span");
                        span.textContent = item.type.name;
                        span.classList.add("type-badge");
                        typesContainer.appendChild(span);
                    });

                    pokemoninfo.stats.forEach((item) => {
                        const p = document.createElement("p");
                        p.textContent = `${item.stat.name.toUpperCase()}: ${item.base_stat}`;
                        statsContainer.appendChild(p);
                    });
                };

//botones siguiente y anterior                

                btnNext.addEventListener("click", () => {
                    fetchPokemon(currentPokemonId + 1);
                });

                btnPrev.addEventListener("click", () => {
                    if(currentPokemonId > 1) {
                        fetchPokemon(currentPokemonId - 1);
                    }
                    else{
                        Message.textContent = "No existen Pokémon con ID menor a 1";
                    }
                });

// Función para mostrar el historial de búsquedas
                function mostrarHistorial() {
                    historyList.innerHTML = "";

                    searchHistory.forEach((pokemon) => {
                        const span = document.createElement("span");
                        span.textContent = pokemon;

                        span.style.cursor = "pointer"; //  indicar que es clickeable
                        span.addEventListener("click", () => {
                            fetchPokemon(pokemon);
                        });

                        historyList.appendChild(span);
                    });

                }

//Recargar la pagina y el input 
                form.addEventListener("submit", (e) => {
                    e.preventDefault();
                    if(input.value.trim() === ""){
                        return;
                    }
                    fetchPokemon(input.value.trim());
                });


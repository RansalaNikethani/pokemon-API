//sync and wait way
fetchData();

async function fetchData(){

    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();


        const Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
        if(!Response.ok){
            throw new Error("couldn't fetch");
        }
    
        const data = await Response.json();
        
        const pokemonSprite = data.sprites.front_default;

        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display="block";
    }

    catch(error){
        console.error(error)
    }

}

/*fetch("https://pokeapi.co/api/v2/pokemon/")
.then(Response => {
    if(!Response.ok){
        throw new Error("couldn't fetch");
    }
    return Response.json();
})
.then(data => console.log(data.name))
.catch(error => console.error(error));*/
//funcion para buscar personajes 
function getPersonajes(done){

  //variable results
  const results = fetch("https://rickandmortyapi.com/api/character");
  
  results
    .then(response => response.json())
    .then(data => {
        done(data)
    });   
}

getPersonajes(data => {

//para ver el objeto arreglo de personajes
//console.log(data);
       
data.results.forEach(personaje => {

const article = document.createRange().createContextualFragment(/*algo de HTML*/ `
    <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="personaje">
            </div>
            <H2>${personaje.name}</H2>
            <span>${personaje.status}</span>
    </article>

    `);
     
    const main = document.querySelector("main");
    main.append(article);

    });

});
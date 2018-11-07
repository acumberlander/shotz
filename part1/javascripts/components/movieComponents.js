// import {movieFilter} from '../events.js'
// movie builder for movieComponents
const movieBuilder = (moviesArray) => {
    let domString = '';
    moviesArray.forEach((movie) => {
        domString += `
        <div id="${movie.id}" class="wrapPer card movie m-3 p-2" style="width: 18rem">
            <img class="img-card-top" src="${movie.image}" alt="${movie.title}">
            <h3 class="text-center card-title">${movie.title}</h3>
            <p class="card-text">${movie.genre} | ${movie.releaseDate}</p>
            <p class="card-text">Shooting Locations: ${movie.locations.length}</p>
        </div>
        `
    })
    $('#movies').append(domString);
    // movieFilter();
};

export {movieBuilder}
// const initializeApp = () => {
//     locationBuilder();
// }

// initializeApp();

// location Builder for locationComponents
const locationBuilder = (locationsArray) => {
    let domString = '';
    locationsArray.forEach((location) => {
        domString += `<div class= "col-4 d-inline-block">`;
        domString += `<div class="card m-2">`;
        domString += `<img class="ml-5 mr-5 mb-2 mt-5 card-pics" src="${location.locationImage}" alt="${location.name}">`
        domString += `<div class= "card-header text-center"><strong>${location.name}</strong></div>`;
        domString += `<p class="m-2 text-center">${location.address} </p>`;
        domString += `<p class="m-2 text-center">${location.shootTime}</p>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    })
    $('#cards').append(domString);
};

// movie builder for movieComponents
const movieBuilder = (moviesArray) => {
    let domString = '';
    moviesArray.forEach((movie) => {
        domString += `<div class="card text-center">`
        domString += `<div class="card-header">`
        domString += `    <ul class="nav nav-tabs card-header-tabs">`
        domString += `    <li class="nav-item">`
        domString += `        <a class="nav-link active" href="#">${movie.title}</a>`
        domString += `    </li>`
        domString += `    </ul>`
        domString += `</div>`
        domString += `<div class="card-body">`
        domString += `<img class="img-thumbnail rounded float-left m-3" src="${movie.image}" alt="${movie.title}">`
        domString += `    <h3 class="card-title d-flex mt-3">${movie.title}</h3>`
        domString += `    <p class="card-text d-flex">${movie.genre} | ${movie.year}</p>`
        domString += `    <p class="card-text d-flex text-left">${movie.description}</p>`
        domString += `</div>`
        domString += `</div>`
    })
    $('#movies').append(domString);
};

// loading movie data
$.get('../db/movie.json')
.done((data) => {
    console.log(data);
    movieBuilder(data.movies);
})
.fail((error) => {
    console.error({error});
})

// loading locations data
$.get('../db/locations.json')
.done((data) => {
    console.log(data);
    locationBuilder(data.locations);
})
.fail((error) => {
    console.error({error});
})
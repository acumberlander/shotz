

let places = [];

const setPlaces = (newArray) => {
    places = newArray;
}

const getPlacez = () => {
    return places;
}

// location Builder for locationComponents
const locationBuilder = (locationsArray) => {
    let domString = '';
    locationsArray.forEach((location) => {
        domString += `<div class= "place col-4 d-inline-block">`;
        domString += `<div class="card m-2">`;
        domString += `<img class="ml-5 mr-5 mb-2 mt-5 card-pics" src="${location.locationImage}" alt="${location.name}">`;
        domString += `<div class= "card-header text-center" id="place"><strong>${location.name}</strong></div>`;
        domString += `<p class="m-2 text-center" id="address">${location.address} </p>`;
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
        domString += `    <p class="card-text d-flex">${movie.genre} | ${movie.date}</p>`
        domString += `    <p class="card-text d-flex text-left">${movie.description}</p>`
        domString += `</div>`
        domString += `</div>`
    })
    $('#movies').append(domString);
};

// sorts pets according to the pet type indicated in the json file and the id of the buttons in the html file
const sortShots = (e) => {
    // e is an event that represents whatever element it's attached to, in this case the buttons on the page
    const shootTime = e.target.id;
    console.log(shootTime);
    // console.log(date);
    if(shootTime === "Morning"){
        const filteredPlaces = places.filter(x => x.shootTime === shootTime);
        locationBuilder(filteredPlaces);
    } else if(shootTime === "Afternoon"){
        const filteredPlaces = places.filter(x => x.shootTime === shootTime);
        locationBuilder(filteredPlaces);
    } else if(shootTime === "Evening"){
        const filteredPlaces = places.filter(x => x.shootTime === shootTime);
        locationBuilder(filteredPlaces);
    } else if(shootTime === "After Dark"){
        const filteredPlaces = places.filter(x => x.shootTime === shootTime);
        locationBuilder(filteredPlaces);
    } else {
        locationBuilder();
    }
}


// function that creates the javascript DOM references for buttons and defines what they do. 
const sortEvents = () => {
    const morningButton = document.getElementById('Morning');
    const afternoonButton = document.getElementById('Afternoon');
    const eveningButton = document.getElementById('Evening');
    const afterdarkButton = document.getElementById('After Dark');
    morningButton.addEventListener('click', sortShots);
    afternoonButton.addEventListener('click', sortShots);
    eveningButton.addEventListener('click', sortShots);
    afterdarkButton.addEventListener('click', sortShots);
}

const filterFunction = () => {
    $("#search").on("keyup", () => {
    let userInput = $('#search').val().toLowerCase();
    let placeCards = $(".place");
    $(placeCards).filter(() => {
        console.log($(placeCards).toggle($(placeCards).text().toLowerCase().indexOf(userInput) > -1));
    });
});
}

filterFunction();


// $(card).toggle($('#place').text().toLowerCase().indexOf(userInput) > -1)


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
const getPlaces = () => {
    $.get('../db/locations.json')
    .done((data) => {
        locationBuilder(data.locations);
    })
    .fail((error) => {
        console.error({error});
    })
}


const initializeApp = () => {
    getPlaces();
    sortEvents();
}

initializeApp();
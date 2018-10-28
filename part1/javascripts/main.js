// location Builder for locationComponents
const locationBuilder = (locationsArray) => {
    $('#cards').empty();
    let domString = '';
    locationsArray.forEach((location) => {
        domString += `
        <div class="wrapPer">
            <div class="card m-2">
                <img class="ml-5 mr-5 mb-2 mt-5 card-pics" src="${location.locationImage}" alt="${location.name}">
                <div class="place-name card-header text-center"><strong>${location.name}</strong></div>
                    <p class="m-2 text-center">${location.address} </p>
                    <p class="m-2 text-center">${location.shootTime}</p>
                </div>
            </div>
        </div>
        `;
    })
    $('#cards').append(domString);
}; 

// movie builder for movieComponents
const movieBuilder = (moviesArray) => {
    let domString = '';
    moviesArray.forEach((movie) => {
        domString += `
        <div id="movieCards" class="wrapPer card m-3 p-2" style="width: 18rem;">
            <img class="img-card-top" src="${movie.image}" alt="${movie.title}">
            <h3 class="text-center card-title">${movie.title}</h3>
            <p class="card-text">${movie.genre} | ${movie.releaseDate}</p>
            <p class="card-text">Shooting Locations: ${movie.locations.length}</p>
            <p class="card-text">${movie.description}</p>            
        </div>
        `
    })
    $('#movies').append(domString);
};


// function that creates the javascript DOM references for buttons and defines what they do. 
const timeFilter = () => {
    const morningButton = document.getElementById('Morning');
    const afternoonButton = document.getElementById('Afternoon');
    const eveningButton = document.getElementById('Evening');
    const afterdarkButton = document.getElementById('After Dark');
    morningButton.addEventListener('click', () => {
        getPlaces("Morning")
    });
    afternoonButton.addEventListener('click', () => {
        getPlaces("Afternoon")
    });
    eveningButton.addEventListener('click', () => {
        getPlaces("Evening")
    });
    afterdarkButton.addEventListener('click', () => {
        getPlaces("After Dark")
    });
}


const movieFilter = () => {
    $('.img-card-top').click((e)=>{
        $(e.target).hide();
        console.log("yo");
    }) ;
}


// search filter function
const searchFilter = () => {
    $(document).ready(function() {
        $("#search").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        // let placeCards = $(".place");
        $(".wrapPer").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });
}


// loading movie data
const getMovies = () => {
    new Promise ((resolve, reject) => {
        $.get('../db/movie.json')
        .done((data) => {
            resolve(data);
            movieBuilder(data.movies);
        })
        .fail((error) => {
            reject({error});
        })
    }
)}

// loading locations data
const getPlaces = (time) => {
    return new Promise ((resolve, reject) => {
        $.get('../db/locations.json')
        .done((data) => {
            resolve(data);
            if (time) {
                let filteredLocations = [];
                data.locations.forEach(location => {
                    if (location.shootTime===time) {
                        filteredLocations.push(location);
                    }
                })
                locationBuilder(filteredLocations);
            } else {
                resolve(data);
                locationBuilder(data.locations);
            }
        })
        .fail((error) => {
            reject({error});
        })
    })
}

// intialize all functions in app
const initializeApp = () => {
    getPlaces(null);
    movieFilter();
    getMovies();
    timeFilter();
    searchFilter();
}

initializeApp();
const cardBuilder = (locationsArray) => {
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

}


// loaded data
$.get('../db/locations.json')
.done((data) => {
    console.log(data);
    cardBuilder(data.locations);
})
.fail((error) => {
    console.error({error});
})
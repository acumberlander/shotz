// location Builder for locationComponents
const locationBuilder = (locationsArray) => {
    $('#cards').empty();
    let domString = '';
    locationsArray.forEach((location) => {
        domString += `
        <div class="wrapPer d-flex justify-content-center">
            <div class="card m-2">
                <img class="ml-5 mr-5 mb-2 mt-5 card-pics" src="${location.locationImage}" alt="${location.name}">
                <div class="place-name card-header text-center locationTitle"><strong>${location.name}</strong></div>
                    <p class="m-2 text-center address">${location.address} </p>
                    <p class="m-2 text-center">${location.shootTime}</p>
                </div>
            </div>
        </div>
        `;
    })
    $('#cards').append(domString);
}; 

export {locationBuilder}
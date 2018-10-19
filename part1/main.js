const cardBuilder = (locationsArray) => {
    let domString = '';
    locationsArray.forEach((location) => {
        domString += `
        <div class="card-container">
            <div class="${location.name}">
            <img class="${location.locationImage}" alt="" width="50%">
            <h3 id="address">${location.address}</h3>
            <h3 id="time">${location.shootTime}</h3>
        </div>
        `
    })
    $('#cards').append(domString);
    
}
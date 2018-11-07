import {locationBuilder} from '../components/locationComponents.js'

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

export {getPlaces}
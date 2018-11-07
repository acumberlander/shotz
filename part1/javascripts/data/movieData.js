import {movieBuilder} from '../components/movieComponents.js'

// loading movie data
const getMovies = (movie) => {
    new Promise ((resolve, reject) => {
        $.get('../db/movie.json')
        .done((data) => {
            resolve(data);
            // if (movie) {
            //     let movieChoice = [];
            //     data.locations.forEach(location => {
            //         if (location===locations.id)
            //     })
            // }
            movieBuilder(data.movies);
        })
        .fail((error) => {
            reject({error});
        })
    }
)}

// const getMovies = () => {
//     let xhr = new XMLHttpRequest();
//     xhr.addEventListener('load', function() {});
//     xhr.addEventListener('error', function() {});
//     xhr.open('GET', './db/movie.json');
//     xhr.send();
// }


export {getMovies}

import {timeFilter, searchFilter, movieFilter} from './events.js'
import {getPlaces} from '../javascripts/data/locationsData.js'
import {getMovies} from '../javascripts/data/movieData.js'

// intialize all functions in app
const initializeApp = () => {
    getPlaces(null);
    movieFilter();
    getMovies();
    timeFilter();
    searchFilter();
}

initializeApp();
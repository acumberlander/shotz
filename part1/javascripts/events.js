import {getPlaces} from './data/locationsData.js'
import {getMovies} from './data/movieData.js'
import {movieBuilder} from './components/movieComponents.js'
// function that creates the javascript DOM references for buttons and defines what they do. 
const timeFilter = () => {
    $("#Morning").on('click', ()=> {
        getPlaces("Morning");
    });
    $("#Afternoon").on('click', ()=> {
        getPlaces("Afternoon");
    });
    $("#Evening").on('click', ()=> {
        getPlaces("Evening");
    });
    $("#AfterDark").on('click', ()=> {
        getPlaces("After Dark");
    });
}


const movieFilter = () => {
    $('#movies').on('click', (e)=>{
        // $('#movies').append(($(e.target.closest('.movie'))));
        console.log(($(e.target).closest('.movie')));
        getMovies();
        // console.log($(e.target));
        // $('#movies').empty();
        $(movieBuilder($(e.target)));
        // $(e.target).closest('#movies').show();
        // console.log("yo");
    });
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

export {timeFilter, searchFilter, movieFilter}
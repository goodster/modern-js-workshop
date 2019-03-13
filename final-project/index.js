// import data
import { findSomeMoviePosters } from "./movieData";

// search button
const button = document.getElementById("search-button");

// grab click
const clickHandler = () => {
    //console.log("Clicked");
    const textField = document.getElementById("search-movies");
    document.getElementById("search-results").innerHTML = textField.value;
    console.log(textField.value);
    Results(textField.value);
};

button.onclick = clickHandler;

//console.log(button.onclick);

const Results = async (searchTerm) => {
    const moviePosters = await findSomeMoviePosters(searchTerm);

    document.getElementById("search-results").innerHTML = moviePosters.join("");
};

console.log("movie");

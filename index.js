/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  movieTitles = [];
  for (i = 0; i < movies.length; i++) {
    movieTitles.push(movies[i].title);
  }
return movieTitles;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
highestMetaScore = 0;
for(i = 0; i < movies.length; i++) {
  if (typeof movies[i].metascore === "string") {
    parseFloat(movies[i].metascore);
  if(highestMetaScore < movies[i].metascore) {
    highestMetaScore = movies[i].metascore
   
   
   
  }
}
}
return parseFloat(highestMetaScore);
}

/**
 * getAverageIMDBRating() ///Return a number, not a string 0
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  sum = 0;
  for ( i = 0;  i < movies.length; i++) {
    if(movies[i].imdbRating.charAt(0) === '"' && movies[i].imdbRating.charAt(movies[i].imdbRating.length-1) === '"'){
      movies[i].imdbRating.substr(1, movies[i].imdbRating.length -2);
      parseFloat(movies[i].imdbRating);
    }
    if(movies.length != 0) {
   //parseFloat(movies[i].imdbRating);
    //console.log(movies[i].imdbRating);
    sum = sum + movies[i].imdbRating;
    console.log(sum)
    sum = sum / movies[i].length;
    //console.log(sum)
    }
    else if (movies.length === 0) {
      return 0;
    }
    
  }
  return sum;
} 

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
ratingObj = { }
if(movies.length === 0) {
  return ratingObj;
}
PGcount = 0;
Gcount = 0;
PG13count = 0;
for(i = 0; i < movies.length; i++) {
  if(movies[i].rated === "PG") {
    PGcount++;
    ratingObj["PG"] = PGcount;
  }
  else if (movies[i].rated === "G") {
    Gcount++;
    ratingObj["G"] = Gcount;
  }
 
  else if(movies[i].rated === "PG-13") {
    PG13count++;
  ratingObj["PG-13"] = PG13count;
  }
  //ratingObj["PG"] = PGcount;
  //ratingObj["G"] = Gcount;
 }
 return ratingObj;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {

nullcase = null;
if(movies.length === 0) {
  return nullcase;
}
  
  for (i = 0 ; i < movies.length; i++) {
    if(movies[i].imdbID.includes(id)) {
      console.log(id);
      console.log(movies[i].imdbID);
      return movies[i];
    }
    else if (movies[i].imdbID !== id ) {
      return nullcase;
    }
  }

}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
 
  genreArr = [];

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre.includes(genre)) {
      genreArr.push(movies[i])
    }
    else if (movies[i].genre !== genre || movies.length === 0) {
      return genreArr;
    }
  }
  return genreArr;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(movies) {
  if (movies.length === 0) {
    return null;
  }
biggestBoxOffice = 0;
for (i = 0; i < movies.length; i++) {
  //parseFloat(movies[i].boxOffice);
  if (typeof movies[i].boxOffice === "string") {
    parseFloat(movies[i].boxOffice);
    console.log(movies[i].boxOffice); 
  }
  if (biggestBoxOffice < movies[i].boxOffice) {
    biggestBoxOffice = movies[i];
    console.log(movies[i].title);
    return movies[i].title;
  }
 
 
}

}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};

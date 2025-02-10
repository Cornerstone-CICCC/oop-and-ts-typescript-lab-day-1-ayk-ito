"use strict";
// 🎟️ Create a Movie Ticket Booking System where users can book tickets and check seat availability.
// 1. Create an enum called MovieGenre with at least 5 movie genres.
// 2. Create a tuple type called Seat which holds (rowLetter: string, seatNumber: number).
// 3. Create a type alias called Movie which contains: movieId (number), title (string), genre (MovieGenre), availableSeats (Seat[]).
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.
var MovieGenre;
(function (MovieGenre) {
    MovieGenre[MovieGenre["Action"] = 0] = "Action";
    // add 4 more
    MovieGenre[MovieGenre["Comedy"] = 1] = "Comedy";
    MovieGenre[MovieGenre["Animation"] = 2] = "Animation";
    MovieGenre[MovieGenre["SF"] = 3] = "SF";
    MovieGenre[MovieGenre["Horror"] = 4] = "Horror";
})(MovieGenre || (MovieGenre = {}));
var movies = [];
// 4. Create a function called addMovie which adds a movie to the movies array. The function needs to return a Movie object.
function addMovie(movieId, title, genre, availableSeats) {
    var newMovie = {
        movieId: movieId,
        title: title,
        genre: genre,
        availableSeats: availableSeats,
    };
    movies.push(newMovie);
    return newMovie;
}
// 5. Create a function called bookSeat which removes a seat from availableSeats if available. The return needs to be a string.
function bookSeat(movieId, rowLetter, seatNumber) {
    var movie;
    movies.forEach(function (e) {
        if (e.movieId === movieId) {
            movie = e;
        }
    });
    if (!movie) {
        return "Not found";
    }
    var seatIndex = -1;
    movie.availableSeats.forEach(function (seat, index) {
        if (seat[0] == rowLetter && seat[1] === seatNumber) {
            seatIndex = index;
        }
    });
    if (seatIndex === -1) {
        return "Seat not available";
    }
    movie.availableSeats.splice(seatIndex, 1);
    return "Seat ".concat(rowLetter).concat(seatNumber, " has been booked successfully");
}
// 6. Create a function called checkSeatAvailability which returns true if a seat is available and false otherwise.
function checkSeatAvailability(movieId, rowLetter, seatNumber) {
    var movie;
    movies.forEach(function (e) {
        if (e.movieId === movieId) {
            movie = e;
        }
    });
    if (!movie) {
        return false;
    }
    for (var i = 0; i < movie.availableSeats.length; i++) {
        var seat = movie.availableSeats[i];
        if (seat[0] === rowLetter && seat[1] === seatNumber) {
            return true;
        }
    }
    return false;
}
// Test cases (Create more if needed)
console.log(addMovie(1, "Avengers", MovieGenre.Action, [
    ["A", 1],
    ["A", 2],
])); // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(addMovie(2, "Sonic The Hedgehog: 3", MovieGenre.Animation, [
    ["B", 1],
    ["B", 2],
])); // { movieId: 1, title: "Avengers", genre: MovieGenre.Action, availableSeats: [["A", 1], ["A", 2]] }
console.log(bookSeat(1, "A", 1)); // "Seat A1 booked successfully"
console.log(checkSeatAvailability(1, "A", 1)); // false
console.log(checkSeatAvailability(1, "A", 2)); // true

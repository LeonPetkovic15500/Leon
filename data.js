var movie = {
  "Filmovi": [
    {
      "film": "I am Legend",
      "rating": 7.2
    }, {
      "film": "Harry Potter and the Philosopher's Stone",
      "rating": 7.6
    }, {
      "film": "Avengers: Endgame",
      "rating": 9.5
    }, {
      "film": "Titanic",
      "rating": 8.5
    }, {
      "film": "Hangover",
      "rating": 8.1
    }, {
      "film": "Doctor Strange",
      "rating": 8.8
    }, {
      "film": "Jumanji",
      "rating": 7.9
    }, {
      "film": "Revenant",
      "rating": 7.2
    }, {
      "film": "Project X",
      "rating": 7.7
    }, {
      "film": "Cruella",
      "rating": 8.8
    }, {
      "film": "Spider Man: Far From Home",
      "rating": 9.6
    }, {
      "film": "Your Name",
      "rating": 9.6
    }, {
      "film": "The Conjuring",
      "rating": 8.1
    }, {
      "film": "Superman",
      "rating": 9.6
    }, {
      "film": "Shutter Island",
      "rating": 7.7
    }, {
      "film": "The Room",
      "rating": 2.2
    }, {
      "film": "Into The Wild",
      "rating": 9.4
    }, {
      "film": "Life is Beutiful",
      "rating": 9.4
    }, {
      "film": "Thor",
      "rating": 6.7
    }, {
      "film": "Justice League",
      "rating": 5.5
    }
  ]
}
var f = document.getElementById('naziv');
var o = document.getElementById('rating');

function drugi(){
  for(i = 0; i < Math.floor((Math.random() * 50) + 1); i++){
     f.innerHTML = movie.Filmovi[i].film;
     o.innerHTML = 'Ocjena: ' + movie.Filmovi[i].rating;
  }
}

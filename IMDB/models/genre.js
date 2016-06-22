var imdb = imdb || {};

(function (imdb) {
    var id = 0;
    var genre = {
        init: function (name) {
            this._id = ++id;
            this.name = name;
            this._movies = []
        },
        addMovie: function addMovie(movie) {
            this._movies.push(movie)
        },
        deleteMovie: function deleteMovie(movie) {
            this._movies = this._movies.filter(function (m) {
                return movie !== m;
            })
        },
        getMovies: function () {
            return this._movies;
        }


    };
    imdb.getGenre = function (name) {
        var gen = Object.create(genre)
        gen.init(name);
        return gen;
    }

}(imdb));
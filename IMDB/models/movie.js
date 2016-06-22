var imdb = imdb || {};

(function (imdb) {
        var id = 0;
    var movie = {
        init : function (title,length,rating,country) {
            this.title = title;
            this.length=length;
            this.rating = rating;
            this.country = country;
            this._actors = [];
            this._reviews = [];
            this._id = ++id;
        },
        addActor : function addActor(actor) {
            this._actors.push(actor)
        },
        getActors : function () {
            return this._actors;
        },
        addReview : function (review) {
            this._reviews.push(review)
        },
        deleteReview : function (review) {
            this._reviews = this._reviews.filter(function (rev) {
                return review===rev;
            })
        },
        deleteReviewById : function deleteReviewById(revId) {
            this._reviews=this._reviews.filter(function (id) {
                return revId===id;
            })
        },
        getReviews : function () {
            return this._reviews
        }
    };
    imdb._Movie = movie;
    imdb.getMovie = function (title,length,rating,country) {
        var mov = Object.create(movie);
        mov.init(title,length,rating,country);
        return mov;
    }
}(imdb));
var imdb = imdb || {};

(function (imdb) {
    var id = 0;
    var review = {
        init : function (author, content, date) {
            this.author = author;
            this.content = content;
            this.date = date;
            this._id = ++id;
        }
    };
    imdb.getReview = function (author, content, date) {
        var rev = Object.create(review);
        rev.init(author,content,date);
        return rev;
    }
}(imdb))
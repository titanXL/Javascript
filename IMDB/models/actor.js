var imdb = imdb || {};

(function (imdb) {
    var id = 0;
    var actor = {
        init : function (name, bio, born) {
            this.name = name;
            this.bio = bio;
            this.born = born;
            this._id = ++id;
        }
    };
    imdb.getActor = function (name, bio, born) {
        var act = Object.create(actor);
        act.init(name,bio,born);
        return act;
    }
}(imdb));
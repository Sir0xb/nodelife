var mongodb = require("../config/mongodb");

var Schema = mongodb.mongoose.Schema;
var FooterSchema = new Schema({
    site        : String,
    url         : String,
    create_date : {
        type    : Date,
        default : Date.now
    },
    update_date : {
        type    : Date,
        default : Date.now
    }
});

var Footer = mongodb.mongoose.model("footer", FooterSchema);

var FooterDao = function () {};

FooterDao.prototype.add = function (obj, callback) {
    var instance = new Footer(obj);
    instance.save(function (err) {
        callback(err, instance);
    });
};

FooterDao.prototype.findById = function (id, callback) {
    Footer.findOne({ _id: id }, function (err, obj) {
        callback(err, obj);
    });
};

FooterDao.prototype.updateById = function (id, obj, callback) {
    Footer.update({ _id: id }, obj, function (err) {
        callback(err);
    });
};

FooterDao.prototype.findAll = function (callback) {
    Footer.find({}, function (err, obj) {
        callback(err, obj);
    });
}

FooterDao.prototype.removeById = function(id, callback){
    Footer.remove({ _id: id }, function(err){
        callback(err, null);
    });

    // Footer.findOneAndUpdate({ _id: id }, { removed: true }, function(err){
    //     callback(err, null);
    // });
}

module.exports = new FooterDao();

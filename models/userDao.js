'use strict';

let mongodb = require("../config/mongodb");

let Schema = mongodb.mongoose.Schema;
let UserSchema = new Schema({
    username    : String,
    password    : String,
    level       : {
        type    : String,
        default : "7"
    },
    create_date : {
        type    : Date,
        default : Date.now
    },
    update_date : {
        type    : Date,
        default : Date.now
    }
});

let User = mongodb.mongoose.model("user", UserSchema);

let UserDao = function () {};

UserDao.prototype.save = function (obj, callback) {
    let instance = new User(obj);
    instance.save(function (err) {
        callback(err);
    });
};

UserDao.prototype.findByName = function (username, callback) {
    User.findOne({ username: username }, function (err, obj) {
        callback(err, obj);
    });
};

module.exports = new UserDao();

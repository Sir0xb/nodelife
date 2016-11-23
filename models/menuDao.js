'use strict';

let mongodb = require("../config/mongodb");

let Schema = mongodb.mongoose.Schema;
let MenuSchema = new Schema({
    menuId      : String,
    menuName    : String,
    level       : {
        type    : String,
        default : "7"
    },
    link        : String,
    desc        : String,
    subMenu     : Array
});

let Menu = mongodb.mongoose.model("menu", MenuSchema);

let MenuDao = function () {};

MenuDao.prototype.save = function (obj, callback) {
    let instance = new Menu(obj);
    instance.save(function (err) {
        callback(err);
    });
};

MenuDao.prototype.updateById = function (menuId, obj, callback) {
    Menu.update({ menuId: menuId }, obj, function (err) {
        callback(err);
    });
};

MenuDao.prototype.findById = function (menuId, callback) {
    Menu.findOne({ menuId: menuId }, function (err, obj) {
        callback(err, obj);
    });
};

MenuDao.prototype.findAll = function (callback) {
    Menu.find({}, function (err, obj) {
        if (err || !obj) {
            let instance = new Menu({
                menuId  : 'root',
                menuName: 'root',
                desc    : '根目录',
                link    : '/',
                level   : '0',
                subMenu : []
            });
            instance.save(function (err) {
                callback(err, instance);
            });
        } else {
            callback(err, obj);
        }
    });
}

module.exports = new MenuDao();

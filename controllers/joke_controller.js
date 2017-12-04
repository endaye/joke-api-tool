/**
 * @copyright Centaurs Technologies Co. 2017
 * @author Zhang, Yuancheng
 * @license Unlicense
 */

// joke_controller.js
var express = require('express'),
    app = express()

var jokes = require('../models/jokes.json');

exports.index = function (req, res, next) {
    res.render("index.pug", { layout: false });
    if (next) {
        next();
    }
};

exports.get_joke = function (req, res, next) {
    // console.log("Total jokes: " + jokes.jokes.length);
    var id = Math.floor(Math.random() * jokes.jokes.length);
    var res_joke = {}

    res_joke.joke = jokes.jokes[id].joke;
    res.send(res_joke);
    if (next) {
        next();
    }
};

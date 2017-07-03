/**
 * Created by En on 7/3/17.
 */

// joke_controller.js
var express = require('express');
var app = express();


var jokes = require('../models/jokes.json');

exports.index = function (req, res) {
    res.render("index.pug", { layout: false });
};

exports.get_joke = function (req, res) {
    // console.log("Total jokes: " + jokes.jokes.length);
    var id = Math.floor(Math.random() * jokes.jokes.length);
    var res_joke = {}
    res_joke.joke = jokes.jokes[id].joke;
    res.send(res_joke);
};

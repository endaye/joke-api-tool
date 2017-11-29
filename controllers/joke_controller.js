/**
 * Created by En on 7/3/17.
 */

// joke_controller.js
var express = require('express'),
    app = express(),
    plugin = require('centaurs-test-plugin');



var jokes = require('../models/jokes.json');

exports.index = function (req, res) {
    res.render("index.pug", { layout: false });
};


exports.get_joke = plugin.timeUsage(req, res, err, function (req, res) {
    // console.log("Total jokes: " + jokes.jokes.length);
    var id = Math.floor(Math.random() * jokes.jokes.length);
    var res_joke = {}
    res_joke.joke = jokes.jokes[id].joke;
    res.send(res_joke);
});

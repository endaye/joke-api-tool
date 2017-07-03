/**
 * Created by En on 7/3/17.
 */

var express = require('express');
var app = express();

var port = process.env.PORT || 3403;
app.set('port', port);

var jokes = require('./controllers/joke_controller.js')

app.get('/', jokes.index);

app.get('/api/joke/get', jokes.get_joke);

app.listen(app.get('port'), function () {
    console.log('Server started at ' + port);
});

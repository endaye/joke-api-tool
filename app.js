/**
 * Created by En on 7/3/17.
 */

var express = require("express"),
    app = express(),
    plugin = require("centaurs-test-plugin");

var port = process.env.PORT || 3403;
app.set("port", port);

var jokes = require("./controllers/joke_controller.js");

app.use(plugin.timer.start);

app.get('/', jokes.index);

app.get("/api/joke/get", jokes.get_joke);

app.use(plugin.timer.stop);

plugin.catchErr();

app.listen(app.get('port'), function () {
    console.log('Server started at ' + port);
    plugin.showConfig();
    plugin.sysCheck(60);
});

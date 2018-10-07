let path = require("path");


module.exports = function(app) {


//Basic route to send the user to the homepage
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/js/earth-scene.js", function(req, res){
	res.sendFile(path.join(__dirname, "./js/earth-scene.js" ))
});

};
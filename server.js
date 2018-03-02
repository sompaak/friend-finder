var express = require("express");
var path = require("path")
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

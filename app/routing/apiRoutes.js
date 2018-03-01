module.exports = function(app) {
  
  var friends = require("../data/friends");


  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {
    console.log(req.body)

    // Empty out the arrays of data
    // get your data from the request object
    // loop through your friends array
      // getting the difference between each score
      // store lowest score
    // respond with the friend object that is the match
    // display some view where the match is displayed



  });
};
module.exports = function(app) {
  
  var friends = require("../data/friends");


  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {

    var userScore = req.body["score[]"];
    var scores = [];
    

    for(var i=0; i<friends.length; i++){
      var difference = 0;
      //var current = friends[i]
      
      //run through scores to compare friends
      for(var j=0; j<userScore.length; j++){
        difference += (Math.abs(parseInt(friends[i]["score"][j]) - parseInt(userScore[j])));
      }
      //push results into scores
      scores.push(difference);
    }

    var leastIndex = scores.indexOf(Math.min(...scores))

    console.log("========here",friends[leastIndex])

    var match  = friends[leastIndex]

    res.json(match)

  // example of sending back data thta was received
  //res.json(req.body)

  });
};


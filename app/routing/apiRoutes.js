module.exports = function(app) {
  
  var friends = require("../data/friends");


  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {

    var userScore = req.body["score[]"];
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    for(var i=0; i<friends.length; i++){
      var difference = 0;
      var current = friends[i]
      
      //run through scores to compare friends
      for(var j=0; j<userScore.length; j++){
        difference += (Math.abs(parseInt(current["score"][j]) - parseInt(userScore[j])));
      }
      //push results into scoresArray
      scoresArray.push(difference);
    }

    var leastIndex = scoresArray.indexOf(Math.min(...scoresArray))

    console.log(friends[leastIndex])

  // example of sending back data thta was received
  res.json(req.body)

  });
};


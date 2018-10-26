const friends = require("../friends");

module.exports = function (app) {
    
    app.get("/api/friends", function(request, response) {
        response.json(friends);
    });
    
    app.post("/api/friends", function(request, response) {
        console.log(request.body);
        const friend = request.body;
        friends.push(friend);
        response.send(200);
    });
};


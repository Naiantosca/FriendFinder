

module.exports = function (app) {
    app.get("/survey", function(req, res) {
        res.render("survey");
    });
}
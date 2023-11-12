var express = require("express");
var router = express.Router();

router.get("/cadastro-empresa", function (req, res) {
    res.render("empresa");
});

router.get("/login", function (req, res) {
    res.render("login");
});
router.get("/sistemaSensor", function (req, res) {
    res.render("index");
});
router.get("/", function (req, res) {
    res.render("index");
});

module.exports = router;
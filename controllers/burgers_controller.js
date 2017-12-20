var express = require('express');

// Requiring our models
var db = require("../models");

var router = express.Router();

router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
        res.json(dbBurger);
    });
});

router.post("/api/burgers", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function(dbBurger) {
        res.json(dbBurger);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
        burger_name: req.body.burger_name,
        devoured: req.body.devored
    }, {
        where: { id: req.body.id }

    }).then(function(dbBurger) {
        res.json(dbBurger);
    });
});

module.exports = router;

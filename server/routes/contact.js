const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//connect to contact model

const Contact = require("../models/businessContact");

/* GET Route for the Business Contact page - READ operation */

router.get("/", (req, res, next) => {
  Contact.find((err, ContactList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("business/list", {
        title: "Business Contacts",
        ContactList,
      });
    }
  });
});

/* GET Route for displaying the Add page - CREATE operation */

router.get("/add", (req, res, next) => {});

/* POST Route for processing the Add page - CREATE operation */

router.post("/add", (req, res, next) => {});

/* GET Route for displaying the Edit page - UPDATE operation */

router.get("/edit/:id", (req, res, next) => {});

/* POST Route for processing the Edit page - UPDATE operation */

router.post("/edit/:id", (req, res, next) => {});

/* GET to perform contact deletion - DELETE operation */

router.get("/delete/:id", (req, res, next) => {});

module.exports = router;

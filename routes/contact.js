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
      res.render("businessContact", {
        title: "Business Contact List",
        ContactList,
      });
    }
  });
});

module.exports = router;

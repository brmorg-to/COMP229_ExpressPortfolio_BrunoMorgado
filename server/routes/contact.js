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

router.get("/add", (req, res, next) => {
  res.render("business/add", {
    title: "Add Contacts",
  });
});

/* POST Route for processing the Add page - CREATE operation */

router.post("/add", (req, res, next) => {
  console.log(req.body);
  let newContact = Contact({
    contact_name: req.body.name,
    contact_number: req.body.phone,
    email: req.body.email,
  });

  Contact.create(newContact, (err, Contact) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //Refresh Business Contacts List
      res.redirect("/contact-list");
    }
  });
});

/* GET Route for displaying the Edit page - UPDATE operation */

router.get("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  Contact.findById(id, (err, contactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //Show the Edit View
      res.render("business/edit", {
        title: "Edit Contact",
        contact: contactToEdit,
      });
    }
  });
});

/* POST Route for processing the Edit page - UPDATE operation */

router.post("/edit/:id", (req, res, next) => {
  let id = req.params.id;

  let updatedContact = Contact({
    _id: id,
    contact_name: req.body.name,
    contact_number: req.body.phone,
    email: req.body.email,
  });

  Contact.updateOne({ _id: id }, updatedContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //Refresh the Business Contact List
      res.redirect("/contact-list");
    }
  });
});

/* GET to perform contact deletion - DELETE operation */

router.get("/delete/:id", (req, res, next) => {
  let id = req.params.id;

  Contact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //Refresh the Business Contact List
      res.redirect("/contact-list");
    }
  });
});

module.exports = router;

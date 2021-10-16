let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//Create a reference to DB schema

let Contact = require("../models/businessContact");

module.exports.displayContactList = (req, res, next) => {
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
};

module.exports.displayAddPage = (req, res, next) => {
  res.render("business/add", {
    title: "Add Contacts",
  });
};

module.exports.processAddPage = (req, res, next) => {
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
};

module.exports.displayEditPage = (req, res, next) => {
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
};

module.exports.processEditPage = (req, res, next) => {
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
};

module.exports.performDeletePage = (req, res, next) => {
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
};

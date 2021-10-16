const express = require("express");
const router = express.Router();

//connect to contact model

let contactController = require("../controllers/contact");

/* GET Route for the Business Contact page - READ operation */

router.get("/", contactController.displayContactList);

/* GET Route for displaying the Add page - CREATE operation */

router.get("/add", contactController.displayAddPage);

/* POST Route for processing the Add page - CREATE operation */

router.post("/add", contactController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE operation */

router.get("/edit/:id", contactController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE operation */

router.post("/edit/:id", contactController.processEditPage);

/* GET to perform contact deletion - DELETE operation */

router.get("/delete/:id", contactController.performDeletePage);

module.exports = router;

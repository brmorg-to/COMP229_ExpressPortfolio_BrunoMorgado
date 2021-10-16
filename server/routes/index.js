const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET home page. */
router.get("/home", indexController.displayHomePage);

/* GET About page. */
router.get("/about", indexController.displayAboutPage);

/* GET Projects page. */
router.get("/projects", indexController.displayProjectsPage);

/* GET Services page. */
router.get("/services", indexController.displayServicesPage);

/* GET Contact Us page. */
router.get("/contact", indexController.displayContactPage);
module.exports = router;

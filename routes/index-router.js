const express = require("express");
const router = express.Router();
const {
  homePageController,
  productPageController,
  galleryPageController,
  aboutPageController,
} = require("../controllers/index-controller");

const {contactController} = require("../controllers/contact-controller");

// Route to render the home page
router.get("/", homePageController);

// Route to render the product page
router.get("/product", productPageController);

// Route to render the gallery page
router.get("/gallery", galleryPageController);

// Route to render the about page
router.get("/about", aboutPageController);

// Route to create a message
router.post("/createMessage", contactController);

module.exports = router;
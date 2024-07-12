const express = require("express");
const router = express.Router();
const {
  homePageController,
  productPageController,
  galleryPageController,
  aboutPageController,
} = require("../controllers/index-controller");

router.get("/", homePageController);
router.get("/product", productPageController);
router.get("/gallery", galleryPageController);
router.get("/about", aboutPageController);

module.exports = router;

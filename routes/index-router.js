const express = require("express");
const router = express.Router();
const { lendingPageController } = require("../controllers/index-controller");

router.get("/", lendingPageController);

module.exports = router;
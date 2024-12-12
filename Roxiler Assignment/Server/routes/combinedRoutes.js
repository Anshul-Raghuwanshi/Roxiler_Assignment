const express = require("express");
const router = express.Router();
const { getCombinedData } = require("../controllers/combinedController");

// Route to get combined data from multiple APIs
router.get("/", getCombinedData);

module.exports = router;

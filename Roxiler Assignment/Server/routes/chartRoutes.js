const express = require("express");
const router = express.Router();
const { getBarChartData } = require("../controllers/chartController");

// Route to get bar chart data for the selected month
router.get("/bar", getBarChartData);

module.exports = router;

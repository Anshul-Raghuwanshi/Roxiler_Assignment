const express = require("express");
const router = express.Router();

// Transactions route
router.get("/transactions", (req, res) => {
  const { month, searchQuery, page, perPage } = req.query;
  res.json({ message: "Transactions endpoint works!", data: { month, searchQuery, page, perPage } });
});

// Statistics route
router.get("/statistics", (req, res) => {
  const { month } = req.query;
  res.json({ message: "Statistics endpoint works!", data: { month } });
});

// Bar chart data route
router.get("/bar-chart", (req, res) => {
  const { month } = req.query;
  res.json({ message: "Bar chart endpoint works!", data: { month } });
});

// Pie chart data route
router.get("/pie-chart", (req, res) => {
  const { month } = req.query;
  res.json({ message: "Pie chart endpoint works!", data: { month } });
});

// Combined data route
router.get("/combined", (req, res) => {
  const { month } = req.query;
  res.json({
    message: "Combined endpoint works!",
    data: {
      statistics: { month },
      barChartData: [{ month }],
      pieChartData: [{ month }],
    },
  });
});

module.exports = router;

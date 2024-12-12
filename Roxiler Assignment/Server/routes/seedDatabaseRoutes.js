const express = require("express");
const router = express.Router();
const { seedDatabase } = require("../controllers/seedDatabaseController");

// Route to seed the database
router.get("/seed", seedDatabase);

router.post("/seed", (req, res) => {
    res.json({ success: true, message: "Seed route is working!" });
  });

module.exports = router;

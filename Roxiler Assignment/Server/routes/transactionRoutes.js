const express = require("express");
const router = express.Router();
const { listTransactions } = require("../controllers/transactionController");

// Route to list transactions with search and pagination
router.get("/", listTransactions);

module.exports = router;

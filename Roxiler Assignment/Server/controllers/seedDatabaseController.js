const axios = require("axios");
const Transaction = require("../models/Transaction");

exports.seedDatabase = async (req, res) => {
  try {
    const response = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");
    const data = response.data;

    await Transaction.deleteMany(); // Clear existing data
    await Transaction.insertMany(data); // Insert new data

    res.json({ success: true, message: "Database initialized successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

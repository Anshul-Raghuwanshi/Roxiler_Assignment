const axios = require("axios");
const Transaction = require("../models/Transaction");

const seedDatabase = async () => {
  try {
    const response = await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json");
    const data = response.data;

    await Transaction.deleteMany();
    await Transaction.insertMany(data);
    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error.message);
  }
};

module.exports = { seedDatabase };
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require('cors');
const statsRoutes = require("./routes/statsRoutes")

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();

// Enable CORS for the frontend (allow requests from localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));


// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes

// Seed database route
app.use("/api/database", require("./routes/seedDatabaseRoutes"));

// Transaction routes
app.use("/api/transactions", require("./routes/transactionRoutes"));

// Statistics routes
app.use("/api/stats", require("./routes/statsRoutes"));

// Chart routes
app.use("/api/charts", require("./routes/chartRoutes"));

// Combined routes
app.use("/api/combined", require("./routes/combinedRoutes"));

// Default route (can be removed, but useful for a quick check)
app.get('/', (req, res) => {
  res.send('Welcome to the Transactions API!');
});


// Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

const PORT = process.env.PORT || 10000;

// ✅ Start server FIRST
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);

  // ✅ Connect DB AFTER server starts
  connectDB()
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("Mongo error:", err.message));
});

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();


app.use(cors());

app.use(express.json());

connectDB().catch(err => {
  console.error("DB connection failed:", err.message);
});


const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);


app.get("/", (req, res) => {
  res.send("server is running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

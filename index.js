const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Bharat eSports Backend is running!"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    status: "online",
    service: "Bharat eSports API"
  });
});

app.listen(PORT, () => {
  console.log(`Bharat eSports API running on port ${PORT}`);
});

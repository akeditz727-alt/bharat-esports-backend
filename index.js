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

app.get("/api/tournaments", (req, res) => {
  res.json({
    success: true,
    tournaments: [
      {
        id: 1,
        name: "Bharat eSports Championship",
        mode: "Battle Royale",
        map: "Bermuda",
        status: "upcoming"
      },
      {
        id: 2,
        name: "Bharat eSports Squad Cup",
        mode: "Clash Squad",
        map: "Bermuda",
        status: "upcoming"
      }
    ]
  });
});
  console.log(`Bharat eSports API running on port ${PORT}`);
});

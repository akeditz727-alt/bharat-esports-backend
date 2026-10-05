const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let tournaments = [{ id: 1, name: "BGMI Bharat Cup", game: "BGMI", prize: "₹1,00,000" }];
let registrations = [];

app.get("/", (req, res) => res.send("Backend Running"));
app.get("/api/tournaments", (req, res) => res.json({ success: true, data: tournaments }));
app.get("/api/registrations", (req, res) => res.json({ success: true, data: registrations }));

app.post("/api/tournaments/:id/register", (req, res) => {
  const { teamName, phone } = req.body;
  registrations.push({ teamName, phone, date: new Date() });
  res.json({ success: true, message: "Registered for " + teamName });
});

app.post("/api/auth/send-otp", (req, res) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  res.json({ success: true, demoOtp: otp });
});

app.listen(PORT, "0.0.0.0", () => console.log("Running"));

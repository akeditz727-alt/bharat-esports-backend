const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- Dummy Data ---
let tournaments = [
  { id: 1, name: "BGMI Bharat Cup", game: "BGMI", prize: "₹1,00,000" },
  { id: 2, name: "Free Fire Showdown", game: "Free Fire", prize: "₹50,000" }
];

let registrations = [];

// --- Routes ---

// Root - check backend is live
app.get("/", (req, res) => {
  res.send("Bharat eSports Backend is Live!");
});

// Get all tournaments
app.get("/api/tournaments", (req, res) => {
  res.json({ success: true, data: tournaments });
});

// Get all registrations (for testing)
app.get("/api/registrations", (req, res) => {
  res.json({ success: true, data: registrations });
});

// REGISTER FOR A TOURNAMENT - MAIN API
app.post("/api/tournaments/:id/register", (req, res) => {
  const tournamentId = req.params.id;
  const { teamName, phone } = req.body;

  if (!teamName || !phone) {
    return res.status(400).json({ success: false, message: "Team name and phone required" });
  }

  const newReg = {
    id: registrations.length + 1,
    tournamentId: tournamentId,
    teamName: teamName,
    phone: phone,
    date: new Date()
  };

  registrations.push(newReg);
  console.log("New Registration:", newReg);

  res.json({ success: true, message: "Registered Successfully: " + teamName, data: newReg });
});

// OTP API
app.post("/api/auth/send-otp", (req, res) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("OTP Generated:", otp);
  res.json({ success: true, message: "OTP Sent", demoOtp: otp });
});

// Health Check for Render
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

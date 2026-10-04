const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Bharat eSports Backend is running!" });
});

app.get("/api/health", (req, res) => {
  res.json({ success: true, status: "online" });
});

app.post("/api/auth/send-otp", (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ success: false, message: "Phone required" });
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log(`DEMO OTP for ${phone}: ${otp}`);
  res.json({ success: true, message: "Demo OTP sent", demoOtp: otp });
});

app.post("/api/auth/verify-otp", (req, res) => {
  const { phone, otp } = req.body;
  if (!otp || otp.length !== 6) {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }
  res.json({ success: true, message: "Verified", token: "demo_token_" + Date.now() });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

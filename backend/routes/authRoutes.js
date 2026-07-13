const express = require("express");
const router = express.Router();

const {
  sendOTP,
  verifyOTP,
  signup,
  login,
} = require("../controllers/authController");

router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
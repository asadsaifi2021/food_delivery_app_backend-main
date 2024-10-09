const express = require("express");
const { createPaymentIntent } = require("../services/stripe.service");
const router = express.Router();

router.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body; // Expecting amount from the request body
    const paymentIntent = await createPaymentIntent(amount);
    res.json(paymentIntent); // Return the clientSecret to the frontend
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
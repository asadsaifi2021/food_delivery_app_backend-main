var Stripe = require("stripe");
var stripe = new Stripe(
  "sk_test_51MtGfBA69yGbPLDVWP6xTbIR5nqNLUwZIRNUFQwZklbE7QOpmyRRXrSxeNv2YeelbnFxh8vMwgCywMYjzqLrEfDy00DuKxqYTw",
  {
    apiVersion: "2024-06-20",
  }
);

const createPaymentIntent = async () => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, // amount should be in cents
      currency: "usd",
      payment_method_types: ["card"],
    });
    return { clientSecret: paymentIntent.client_secret };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createPaymentIntent,
};

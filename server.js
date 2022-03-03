const express = require("express");
const app = express();
// This is your test secret API key.
const stripe = require("stripe")('sk_test_51JzmzJSIPtWkxwXG14ztcO5eMS3tzX0lyL1HfBYPf9hemGGIFZ7yJ7vBprDxpPIDQXnqkCAmMIVva01JDWRsYmvB00dgLjTiBF');

app.use(express.static("public"));
app.use(express.json());


// (async function() {
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 2000,
//     currency: "usd",
//     payment_method_types: ["card"],
//   });
//   console.log(paymentIntent);
// })();
const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.get("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port http://localhost:4242 !"));
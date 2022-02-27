const stripe = require("stripe")(
  "sk_test_51JzmzJSIPtWkxwXG14ztcO5eMS3tzX0lyL1HfBYPf9hemGGIFZ7yJ7vBprDxpPIDQXnqkCAmMIVva01JDWRsYmvB00dgLjTiBF"
);

(async function() {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 2000,
    currency: "usd",
    payment_method_types: ["card"],
  });
  console.log(paymentIntent);
})();

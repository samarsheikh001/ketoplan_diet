<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="">
    {{ this.$store.state.dietplan.email }}
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="(v) => (loading = v)"
    />
    <button @click="submit">Pay now!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data () {
    return {
      publishableKey: "pk_test_51JzmzJSIPtWkxwXGQ07yW0OQhbx4I6KxBaOLJBNJ3P1yl3IGPN87CyQRlpQypCO7eGlihA7uKaP7uf52SEjAf9RZ00jvB7Weg6",
      loading: false,
      lineItems: [
        {
          price: 'price_1K0J46SIPtWkxwXGHruHEZtd', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'https://your-success-url',
      cancelURL: 'https://your-cancel-url',
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hyd6mEeU0pDymWMD3jD6IHG73Ya8gY89D8P4eaUToPJiuYa3uwi9IxcgFjrTWiAIbBLbuOXAzC0AAbun7n6QdNg00eCEJzCLp";

  const onToken = token => {
    console.log(token);
    alert("Payment succesfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="The Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      ammount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

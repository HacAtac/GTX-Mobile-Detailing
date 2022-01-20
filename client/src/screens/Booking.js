import React from "react";
import { InlineWidget } from "react-calendly";
import StripeCheckout from "react-stripe-checkout";
const App = () => {
  function onToken(token) {
    console.log(token);
  }
  return (
    <div>
      <h1 id="book-header"> Booking and Payment </h1>
      <div className="calendly">
        <InlineWidget url="https://calendly.com/hacatac" />
      </div>
      <div className="stripe">
        <StripeCheckout
          //need to pass in the cost of each service here
          //   amount={totalAmount * 100}
          token={onToken}
          stripeKey="pk_test_51KGGcjDQw3iOHoMjGmIYfxSZYBPdKjlyNY9C5XexdLbB5BdS68lD6Ittw0vW5Om1b1wBJJvKz5iXxFrloofkboVa00alz32OHF"
        />
      </div>
    </div>
  );
};
export default App;

import React from "react";
import { InlineWidget } from "react-calendly";
import StripeCheckout from "react-stripe-checkout";
const App = () => {
  function onToken(token) {
    console.log(token);
  }
  return (
    <div className="">
      <h1 id="book-header"> Booking and Payment </h1>
      <div className="card" id="stripe">
        <h1 id="stripe-header">Pay Securely with Stripe</h1>
        <p id="stripe-p">
          {" "}
          We aim to please, have a peace of mind knowing that payments will be
          secure through stripe.
        </p>
        <StripeCheckout
          //need to pass in the cost of each service here
          //   amount={totalAmount * 100}
          token={onToken}
          stripeKey="pk_test_51KGGcjDQw3iOHoMjGmIYfxSZYBPdKjlyNY9C5XexdLbB5BdS68lD6Ittw0vW5Om1b1wBJJvKz5iXxFrloofkboVa00alz32OHF"
        />
      </div>
      <div className="calendly" id="calendly">
        <InlineWidget url="https://calendly.com/hacatac" />
      </div>
      {/* <div className="policy" id="policy">
        <Link to={`/policy/${policy._id}`}>
          <button className="policy-button" id="policy-btn">
            Our Policy
          </button>
        </Link>
      </div> */}
    </div>
  );
};
export default App;

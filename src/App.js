import React, { useState } from "react";
import StripeCheckoutButton from "../src/components/stripe/stripe-payment";
import PayPal from "./components/PayPal/Paypal";
import Design, {Footer} from './design';
import './index.css';

function App() {
  const [checkout, setCheckOut] = useState(false);

  return (
    <>
    <Design />
    <div className="App">
      {checkout ? (
        <>
        
        <StripeCheckoutButton/>
        
        <PayPal />
        </>
      ) : (
        <button className='button'
          onClick={() => {
            setCheckOut(true);
          }}
        >
         Donate Us
        </button>
      )}
      
    </div>
    <Footer />
    </>
  );
}

export default App;

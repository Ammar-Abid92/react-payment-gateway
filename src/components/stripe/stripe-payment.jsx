  import React from 'react';
  import StripeCheckout from 'react-stripe-checkout';

  const StripeCheckoutButton = ({ price }) => {
       const priceForStripe = price*100;
       const publishableKey = "pk_test_51J40D6Bn53CYRqa4w6oUyLdH2XaiKrsYKbVpxeM3RmWqNBNHi6t3g8WwcKX24T2AKkKmTmMEP7GnEc3WBUgjgKIo009AY3OI1e"
    const onToken = token =>{
        console.log(token)
        alert("payment succesful")
    }
       return(
           <StripeCheckout
           
               label="Using Stripe"
               name="Donating Site"
               billingAddress
               shippingAddress
               image='https://svgshare.com/i/CUz.svg'
               description={`Donate $${500}`}
               amount = {priceForStripe}
               panelLabel='Pay Now'
               token={onToken}
               stripeKey={publishableKey}
           />
       );
  
  
    } ;
    export default StripeCheckoutButton;
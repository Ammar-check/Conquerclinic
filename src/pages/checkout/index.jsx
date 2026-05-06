import CheckoutPage from '@/components/layout/CheckoutPage'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const Checkout = () => {
  return (
    <>
       <Navbar/>
       <div className='pt-18 bg-[#333333]'>

 <CheckoutPage
      brandName="Joli+Blokes"
      signInHref="/login"
      onSignUpEmail={() => console.log("sign up clicked")}
      subtotal="$0.00"
      total="$0.00"
      originalTotal="-$0.00"
      cartItems={[]}  // pass items when cart is populated
    /> 
       </div>
      
    </>
  )
}

export default Checkout
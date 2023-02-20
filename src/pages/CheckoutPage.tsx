import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
    const navigate = useNavigate();
  return (
    <div>
        CheckoutPage

        <button onClick={() => navigate('/')}>Return to Home</button>
        </div>
    
  )
}

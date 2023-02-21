import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../App';

export default function CheckoutPage() {
  const context = useContext(MyContext);
    const navigate = useNavigate();
  return (
    <div>
        CheckoutPage

        
        </div>
    
  )
}

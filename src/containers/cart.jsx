import React from 'react'
import { AppContext } from '../context/context'

const Cart = () => {

  const miProvider = React.useContext(AppContext);
  console.log(miProvider)
  return (
    <h1 style={{textAlign:'center'}}>Cart</h1>



  )
}

export default Cart
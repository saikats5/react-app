import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return <div classname="cart-container">
    <h2>Shopping Cart</h2>
    {cart.cartItems.length === 0 ? (<div className='cart-empty'><p>Your cart is currently empty</p><div className="start-shopping"><Link to='/'></Link></div></div>):()}
  </div>
}

export default Cart

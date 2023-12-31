import React from 'react'
import './CartItem.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { addToCart, removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'
function CartItem({ cart }) {

    const disPatch = useDispatch();

    return (
        <>
            <div className="CartItem">
                <div className='item-img'>
                    <img src={cart.image} alt="image" />
                </div>
                <div className="item-info-wrapper">
                    <div className="item-info">
                        <p className="title">{cart.title}</p>
                        <div className="price">₹ {cart.price}</div>
                        <div className="quantity-selector">
                            <span className='btn decrement' onClick={() => disPatch(removeFromCart(cart))}>-</span>
                            <span className='quantity'> {cart.quantity} </span>
                            <span className='btn increment' onClick={() => disPatch(addToCart(cart))}>+</span>
                        </div>
                        <p className="total-price">Subtotal : ₹ {cart.quantity * cart.price}</p>
                    </div>
                    <div className="item-remove">
                        <AiOutlineClose />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem
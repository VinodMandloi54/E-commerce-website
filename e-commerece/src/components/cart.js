import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { removeFromCart, updateQuantity, clearCart } from '../store/cartslice';
import { faTrash } from '@danieloi/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleQuantityChange = (productId, newQuantity) => {
        dispatch(updateQuantity({ productId, quantity: newQuantity }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="cart-container">
            {cartItems.length === 0 ? (
                <h1>Your cart is currently empty</h1>
            ) : (
                <div>
                    <h1>Your Cart</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Name of Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Remove</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.productId}>
                                    <td>
                                        <img
                                            src={item.productImg}
                                            alt={item.productTitle}
                                            height="50"
                                        />
                                    </td>
                                    <td>{item.productTitle}</td>
                                    <td>${item.productPrice}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                handleQuantityChange(item.productId, e.target.value)
                                            }
                                        />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={faTrash} style={{ color: "#b8bb16", cursor:"pointer"}} onClick={()=> handleRemove(item.productId)} />
                                    </td>
                                    <td>${item.productPrice * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="subtotal-section">
                        <button className="btn btn-outline-danger" onClick={handleClearCart}>Clear Cart</button>
                        <div style={{ lineHeight: "2.5" }}>
                            <div className="subtotal"><b>Subtotal: ${calculateSubtotal(cartItems)}</b></div>
                            <div className="tax"><b>Tax: ${calculateTax(cartItems)}</b></div>
                            <div className="total"><b>Final Total: ${calculateTotal(cartItems)}</b></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const calculateSubtotal = (items) => {
    return items.reduce((total, item) => total + item.productPrice * item.quantity, 0);
};

const calculateTax = (items) => {
    const subtotal = calculateSubtotal(items);
    return (subtotal * 0.1).toFixed(1); // Example tax calculation (10%)
};

const calculateTotal = (items) => {
    const subtotal = calculateSubtotal(items);
    const tax = calculateTax(items);
    return (subtotal + parseFloat(tax)).toFixed(1);
};

export default Cart;
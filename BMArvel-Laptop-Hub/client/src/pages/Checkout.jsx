import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

function Checkout() {
  const { cart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h1>Your cart is empty</h1>

        <p>
          Add a laptop to your cart before proceeding to checkout.
        </p>

        <Link to="/shop">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      <div className="checkout-header">
        <h1>Checkout</h1>
        <p>Complete your details to place your order.</p>
      </div>

      <div className="checkout-container">

        <div className="checkout-form">

          <h2>Customer Information</h2>

          <div className="checkout-row">

            <div className="checkout-group">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
              />
            </div>

            <div className="checkout-group">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
              />
            </div>

          </div>

          <div className="checkout-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="checkout-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          <h2>Delivery Information</h2>

          <div className="checkout-group">
            <label>Delivery Address</label>
            <input
              type="text"
              placeholder="Enter your delivery address"
            />
          </div>

          <div className="checkout-row">

            <div className="checkout-group">
              <label>City</label>
              <input
                type="text"
                placeholder="City"
              />
            </div>

            <div className="checkout-group">
              <label>State</label>
              <input
                type="text"
                placeholder="State"
              />
            </div>

          </div>

          <h2>Payment Method</h2>

          <div className="payment-option">
            <input
              type="radio"
              name="payment"
              defaultChecked
            />

            <div>
              <strong>Pay on Delivery</strong>
              <p>Pay when your laptop is delivered.</p>
            </div>
          </div>

          <button className="place-order-btn">
            Place Order
          </button>

        </div>

        <div className="checkout-summary">

          <h2>Your Order</h2>

          {cart.map((item) => (
            <div
              className="checkout-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />

              <div>
                <h3>{item.name}</h3>

                <p>
                  Qty: {item.quantity}
                </p>
              </div>

              <strong>
                ₦{(
                  item.price * item.quantity
                ).toLocaleString("en-NG")}
              </strong>

            </div>
          ))}

          <div className="checkout-total">
            <span>Total</span>

            <strong>
              ₦{cartTotal.toLocaleString("en-NG")}
            </strong>
          </div>

          <Link
            to="/cart"
            className="back-cart"
          >
            ← Back to Cart
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Checkout;
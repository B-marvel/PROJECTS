import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";
function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  return (
    <div className="cart-page">

      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>Review the laptops you want to purchase.</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">

          <div className="cart-icon">
            🛒
          </div>

          <h2>Your cart is empty</h2>

          <p>
            You haven't added any laptops to your cart yet.
          </p>

          <Link
            to="/shop"
            className="continue-shopping"
          >
            Continue Shopping
          </Link>

        </div>
      ) : (

        <div className="cart-content">

          <div className="cart-items">

            {cart.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-info">

                  <h3>{item.name}</h3>

                  <p>
                    ₦{item.price.toLocaleString("en-NG")}
                  </p>

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

                <div className="cart-item-right">

                  <strong>
                    ₦{(
                      item.price * item.quantity
                    ).toLocaleString("en-NG")}
                  </strong>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    🗑️ Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>

              <strong>
                ₦{cartTotal.toLocaleString("en-NG")}
              </strong>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="summary-total">
              <span>Total</span>

              <strong>
                ₦{cartTotal.toLocaleString("en-NG")}
              </strong>
            </div>

            <Link
  to="/checkout"
  className="checkout-btn"
>
  Proceed to Checkout
</Link>

            <Link
              to="/shop"
              className="continue-shopping-link"
            >
              ← Continue Shopping
            </Link>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;
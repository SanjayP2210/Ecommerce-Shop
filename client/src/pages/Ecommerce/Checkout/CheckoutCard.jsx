import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../reducers/cartReducer";
import emptyCardIcon from "../../../assets/images/svgs/empty-shopping-cart-95276f54.svg";

const CheckoutCard = ({ nextStep }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (id) => {
    let limitExist = false;
    const product = cartItems.find((item) => item.productId.toString() === id);
    if (product?.productId) {
      limitExist = product?.quantity === product?.stock;
    }
    if (limitExist) return;
    const formData = {
      productId: product._id,
      quantity: 1,
      price: product?.updatedPrice,
      productName: product?.productName,
      image: product?.image,
      stock: product?.stock,
      updatedPrice: product?.updatedPrice,
    };
    dispatch(addToCart(formData));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const {
    cartItems,
    isDeleted,
    isCartUpdated,
    isLoading,
    totalCount,
    totalPrice,
  } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems?.length === 0 ? (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <img
                src={emptyCardIcon}
                alt="cart"
                width="200px"
                className="img-fluid"
              />
              <h5 className="mt-3">Cart is Empty</h5>
              <button
                className="btn btn-primary mt-3"
                type="button"
                id="go-to-shopping"
              >
                Go back to Shopping
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="table-responsive" id="style-7">
            <table className="table align-middle text-nowrap mb-0">
              <thead className="fs-2">
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th className="text-end">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((product) => {
                  return (
                    <>
                      <tr key={product?._id}>
                        <td className="border-bottom-0">
                          <div className="d-flex align-items-center gap-3 overflow-hidden">
                            <div className="cart-product-image">
                              <img
                                src={product?.image}
                                alt="matdash-img"
                                className="img-fluid rounded"
                                width="80"
                              />
                            </div>
                            <div>
                              <h6 className="fw-semibold fs-4 mb-0">
                                {product?.productName}
                              </h6>
                              <p className="mb-0">toys</p>
                              <a
                                href="javascript:void(0)"
                                className="text-danger fs-4"
                              >
                                <i className="ti ti-trash"></i>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="border-bottom-0">
                          <div className="input-group input-group-sm flex-nowrap rounded">
                            <button
                              className="btn btn-outline-primary btn-sm minus-button"
                              type="button"
                              id={product?._id}
                              onClick={(e) => {
                                e.preventDefault();
                                handleRemoveFromCart(product?._id);
                              }}
                            >
                              <i className="ti ti-minus"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-sm"
                            >
                              <b>{product?.quantity}</b>
                            </button>
                            <button
                              className="btn btn-outline-primary btn-sm plus-button"
                              type="button"
                              id={product?._id}
                              onClick={(e) => {
                                e.preventDefault();
                                handleAddToCart(product?._id);
                              }}
                              disabled={product?.quantity === product?.stock}
                            >
                              <i className="ti ti-plus"></i>
                            </button>
                          </div>
                        </td>
                        <td className="text-end border-bottom-0">
                          <h6 className="fs-4 fw-semibold mb-0">
                            {product?.price * product?.quantity}
                          </h6>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="order-summary border rounded p-4 my-4">
            <div className="p-3">
              <h5 className="fs-5 fw-semibold mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-4">
                <p className="mb-0 fs-4">Sub Total</p>
                <h6 className="mb-0 fs-4 fw-semibold">{totalPrice}</h6>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <p className="mb-0 fs-4">Discount 5%</p>
                <h6 className="mb-0 fs-4 fw-semibold text-danger">-$14</h6>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <p className="mb-0 fs-4">Shipping</p>
                <h6 className="mb-0 fs-4 fw-semibold">Free</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="mb-0 fs-4 fw-semibold">Total</h6>
                <h6 className="mb-0 fs-5 fw-semibold">{totalPrice}</h6>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-outline-primary ms-6 cursor-pointer"
              onClick={() => nextStep()}
            >
              Checkout{" "}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CheckoutCard;

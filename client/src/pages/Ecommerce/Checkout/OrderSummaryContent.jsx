import React from 'react'
import { useSelector } from 'react-redux';

const OrderSummaryContent = () => {
  const {
    totalPrice,
  } = useSelector((state) => state.cart);
  return (
    <>
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
    </>
  );
}

export default OrderSummaryContent
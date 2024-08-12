import React, { useEffect, useState } from "react";
import apiService from "../../../service/apiService";
import { toast } from "react-toastify";
import OrderSummaryContent from "./OrderSummaryContent";
import paymentSVG from "../../../assets/images/products/payment.svg";
import paypalSvg from "../../../assets/images/svgs/paypal.svg";
import mastercardSvg from "../../../assets/images/svgs/mastercard.svg";
const CheckoutAddressCard = ({ previousStep, nextStep, totalPrice }) => {
  //     "user": {
  //   "image": {
  //     "public_id": "ztvutkr3p8pihdehnsnb",
  //     "url": "https://res.cloudinary.com/dcwyk4buy/image/upload/v1720894493/ztvutkr3p8pihdehnsnb.jpg"
  //   },
  //   "cart": [],
  //   "_id": "6692c42c54d29776792e5cc6",
  //   "name": "sanjay panchal",
  //   "email": "sp@gmail.com",
  //   "mobileNumber": "7383191687",
  //   "password": "$2a$10$JesVEGtm5yO/MuEBBi8oy.x1XtZYbLycqcohozViQ3XUCyVUWFXwq",
  //   "isAdmin": false,
  //   "createdAt": "2024-07-13T18:15:06.691Z",
  //   "modifiedAt": "2024-07-13T18:15:06.691Z",
  //   "__v": 0,
  //   "themeColor": "dark"
  // },
  // "city": "Anytown",
  // "state": "CA",
  // "country": "USA",
  // "isDefault": false,
  // "createdAt": "2024-07-27T19:24:59.000Z",
  // "modifiedAt": "2024-07-27T19:24:59.000Z",
  // "createdBy": "6692c42c54d29776792e5cc6",
  // "modifiedBy": "6692c42c54d29776792e5cc6",
  // "__v": 0,
  // "mobileNumber": "7778889997"
    const [addressData, setAddressData] = useState([]);
    const [isAdressSelected, setIsAdressSelected] = useState(
      localStorage.getItem("selectedAddress") || false
    );
  const fetchAddress = async () => {
    try {
      const response = await apiService.getRequest("address");
      if (response) {
        if (response.isError) {
          toast.error("error while fetching address", response?.message);
        } else {
          const addresses = response.addresses;
          setAddressData(addresses);
        }
      }
    } catch (error) {
      toast.error("error while fetching address", error);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  const handleSelectedAddress = (address) => {
      localStorage.setItem("selectedAddress", address);
      setIsAdressSelected(true);
    // nextStep();
  };

  return (
    <>
      {" "}
      <section>
        <div
          className="billing-address-content"
          style={{ display: !isAdressSelected ? "block" : "none" }}
        >
          <div className="row">
            {addressData &&
              addressData?.map((address, index) => {
                return (
                  <>
                    <div key={index} className="col-lg-4">
                      <div className="card shadow-none border">
                        <div className="card-body p-4">
                          <h6 className="mb-3 fs-4 fw-semibold">
                            {address?.user?.name}
                          </h6>
                          <p className="mb-1 fs-2">
                            {[
                              address?.address,
                              address?.city,
                              address.state,
                              address.country,
                              address.zipCode,
                            ]?.join()}
                          </p>
                          <h6 className="d-flex align-items-center gap-2 my-4 fw-semibold fs-4">
                            <i className="ti ti-device-mobile fs-7"></i>
                            {address.mobileNumber}
                          </h6>
                          <a
                            href="javascript:void(0)"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSelectedAddress(address);
                            }}
                            className="btn btn-outline-primary  billing-address"
                          >
                            Deliver To this address
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          <OrderSummaryContent />
        </div>
        <div
          className="payment-method-list payment-method"
          style={{ display: isAdressSelected ? "block" : "none" }}
        >
          <div className="delivery-option btn-group-active  card shadow-none border">
            <div className="card-body p-4">
              <h6 className="mb-3 fw-semibold fs-4">Delivery Option</h6>
              <div
                className="btn-group flex-row gap-3 w-100"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <div className="position-relative form-check btn-custom-fill flex-fill ps-0">
                  <input
                    type="radio"
                    className="form-check-input ms-4 round-16"
                    name="deliveryOpt1"
                    id="btnradio1"
                    autoComplete="off"
                    checked
                  />
                  <label
                    className="btn btn-outline-primary mb-0 p-3 rounded ps-5 w-100"
                    htmlFor="btnradio1"
                  >
                    <div className="text-start ps-2">
                      <h6 className="fs-4 fw-semibold mb-0">Free delivery</h6>
                      <p className="mb-0 text-muted">
                        Delivered on Firday, May 10
                      </p>
                    </div>
                  </label>
                </div>
                <div className="position-relative form-check btn-custom-fill flex-fill ps-0">
                  <input
                    type="radio"
                    className="form-check-input ms-4 round-16"
                    name="deliveryOpt1"
                    id="btnradio2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary mb-0 p-3 rounded ps-5 w-100"
                    htmlFor="btnradio2"
                  >
                    <div className="text-start ps-2">
                      <h6 className="fs-4 fw-semibold mb-0">
                        Fast delivery ($2,00)
                      </h6>
                      <p className="mb-0 text-muted">
                        Delivered on Wednesday, May 8
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-option btn-group-active  card shadow-none border">
            <div className="card-body p-4">
              <h6 className="mb-3 fw-semibold fs-4">Payment Option</h6>
              <div className="row">
                <div className="col-lg-8">
                  <div
                    className="btn-group flex-column"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <div className="position-relative mb-3 w-100 form-check btn-custom-fill ps-0">
                      <input
                        type="radio"
                        className="form-check-input ms-4 round-16"
                        name="paymentType1"
                        id="btnradio3"
                        autoComplete="off"
                        checked
                      />

                      <label
                        className="btn btn-outline-primary mb-0 p-3 rounded ps-5 w-100"
                        htmlFor="btnradio3"
                      >
                        <div className="d-flex align-items-center">
                          <div className="text-start ps-2">
                            <h6 className="fs-4 fw-semibold mb-0">
                              Pay with Paypal
                            </h6>
                            <p className="mb-0 text-muted">
                              You will be redirected to PayPal website to
                              complete your purchase securely.
                            </p>
                          </div>
                          <img
                            src={paypalSvg}
                            alt="matdash-img"
                            className="img-fluid ms-auto"
                          />
                        </div>
                      </label>
                    </div>
                    <div className="position-relative mb-3 form-check btn-custom-fill ps-0">
                      <input
                        type="radio"
                        className="form-check-input ms-4 round-16"
                        name="paymentType1"
                        id="btnradio4"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-primary mb-0 p-3 rounded ps-5 w-100"
                        htmlFor="btnradio4"
                      >
                        <div className="d-flex align-items-center">
                          <div className="text-start ps-2">
                            <h6 className="fs-4 fw-semibold mb-0">
                              Credit / Debit Card
                            </h6>
                            <p className="mb-0 text-muted">
                              We support Mastercard, Visa, Discover and Stripe.
                            </p>
                          </div>
                          <img
                            src={mastercardSvg}
                            alt="matdash-img"
                            className="img-fluid ms-auto"
                          />
                        </div>
                      </label>
                    </div>
                    <div className="position-relative form-check btn-custom-fill ps-0">
                      <input
                        type="radio"
                        className="form-check-input ms-4 round-16"
                        name="paymentType1"
                        id="btnradio5"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-outline-primary mb-0 p-3 rounded ps-5 w-100"
                        htmlFor="btnradio5"
                      >
                        <div className="text-start ps-2">
                          <h6 className="fs-4 fw-semibold mb-0">
                            Cash on Delivery
                          </h6>
                          <p className="mb-0 text-muted">
                            Pay with cash when your order is delivered.
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img
                    src={paymentSVG}
                    alt="matdash-img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <OrderSummaryContent />
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => previousStep()}
          >
            Back
          </button>
          <button
            type="button"
            className="btn btn-rounded btn-outline-primary ms-6 cursor-pointer"
            onClick={() => nextStep()}
            disabled={!isAdressSelected}
          >
            {isAdressSelected
              ? "Complete an order"
              : "Select Address to go next"}
          </button>
        </div>
      </section>
    </>
  );
};

export default CheckoutAddressCard;

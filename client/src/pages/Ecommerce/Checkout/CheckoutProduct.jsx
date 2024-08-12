/* eslint-disable no-undef */
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import "../../../assets/css/wizard.css";
import CheckoutCard from "./CheckoutCard";
import "../index.css";
import { Wizard, useWizard } from "react-use-wizard";
import CheckoutAddressCard from "./CheckoutAddressCard";
import paymentCompletedGif from "../../../assets/images/gif/payment-complete-61546c47.gif";

const CheckoutProduct = () => {
  const list = ["Cart", "Billing & address", "Payment"];
  const { totalPrice } = useSelector((state) => state.cart);

  const Header = () => {
    const { activeStep, stepCount, previousStep, nextStep, goToStep } =
      useWizard();
    const handleSelectedTab = (target) => {
      goToStep(parseInt(target.innerHTML) - 1);
    };

    return (
      <>
        <div className="steps clearfix">
          <ul role="tablist">
            {Array.from({ length: stepCount }).map((_, index) => (
              <>
                <li
                  role="tab"
                  className={`${index === 0 ? "first" : ""} ${
                    index < activeStep ? "done" : ""
                  } ${index === activeStep ? "current" : ""}`}
                  aria-disabled="false"
                  aria-selected="true"
                >
                  <a
                    id={`steps-uid-0-t-${index}`}
                    href="javascript:void(0)"
                    aria-controls={`steps-uid-0-p-${index}`}
                    defaultValue={index}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelectedTab(e.target);
                    }}
                  >
                    <span className="current-info audible">current step: </span>
                    <span className="step" id={index + 1}>
                      {index + 1}
                    </span>
                    {list[index]}
                  </a>
                </li>
              </>
            ))}
          </ul>
        </div>
      </>
    );
  };

  const Step1 = () => {
    const { handleStep, previousStep, nextStep } = useWizard();

    // Attach an optional handler
    handleStep(() => {
      alert("Going to step 2");
    });

    return (
      <>
        <Header />
        <section>
          <CheckoutCard nextStep={nextStep} />
        </section>
      </>
    );
  };

  const Step2 = () => {
    const { handleStep, previousStep, nextStep } = useWizard();

    // Attach an optional handler
    handleStep(() => {
      alert("Going to step 3");
    });

    return (
      <>
        <Header />
        <CheckoutAddressCard
          previousStep={previousStep}
          nextStep={nextStep}
          totalPrice={totalPrice}
        />
      </>
    );
  };

  const Step3 = () => (
    <>
      <Header />
      <section className="payment-method text-center">
        <h5 className="fw-semibold fs-5">Thank you for your purchase!</h5>
        <h6 className="fw-semibold text-primary mb-7">
          Your order id: 3fa7-69e1-79b4-dbe0d35f5f5d
        </h6>
        <img
          src={paymentCompletedGif}
          alt="matdash-img"
          className="img-fluid mb-4"
          width="350"
        />
        <p className="mb-0 fs-2">
          We will send you a notification
          <br />
          within 2 days when it ships.
        </p>
        <div className="d-sm-flex align-items-center justify-content-between my-4">
          <a
            href="./eco-shop.html"
            className="btn btn-success d-block mb-2 mb-sm-0"
          >
            Continue Shopping
          </a>
          <a href="javascript:void(0)" className="btn btn-primary d-block">
            Download Receipt
          </a>
        </div>
      </section>
    </>
  );
  const formRef = useRef(null);

  return (
    <div className="container-fluid checkout">
      <div className="card card-body py-3">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="d-sm-flex align-items-center justify-space-between">
              <h4 className="mb-4 mb-sm-0 card-title">Checkout</h4>
              <nav aria-label="breadcrumb" className="ms-auto">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item d-flex align-items-center">
                    <NavLink
                      className="text-muted text-decoration-none d-flex"
                      to={"/"}
                    >
                      <i className="ti ti-home-2 fs-6"></i>
                    </NavLink>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    <span className="badge fw-medium fs-2 bg-primary-subtle text-primary">
                      Checkout
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout">
        <div className="card">
          <div className="card-body p-4">
            <div className="wizard-content">
              <form
                className="tab-wizard wizard-circle wizard clearfix"
                ref={formRef}
              >
                <Wizard>
                  <Step1 />
                  <Step2 />
                  <Step3 />
                </Wizard>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;

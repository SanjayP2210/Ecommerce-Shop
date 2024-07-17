import React from 'react';
import Logo from "../../assets/images/logos/Logo.png";
import LoginSlider from "../../assets/images/backgrounds/login-side.png";
import { NavLink } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <div id="main-wrapper">
      <div className="position-relative overflow-hidden auth-bg min-vh-100 w-100 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="row justify-content-center w-100 my-5 my-xl-0">
            <div className="col-md-9 d-flex flex-column justify-content-center">
              <div className="card mb-0 bg-body auth-login m-auto w-100">
                <div className="row gx-0">
                  <div className="col-xl-6 border-end">
                    <div className="row justify-content-center py-4">
                      <div className="col-lg-11">
                        <div className="card-body">
                          <a
                            href="../index.html"
                            className="text-nowrap logo-img d-block mb-4 w-100"
                          >
                            <img
                              src={Logo}
                              className="dark-logo"
                              alt="Logo-Dark"
                            />
                          </a>
                          <p className="text-muted">
                            Please enter the email address associated with your
                            account and We will email you a link to reset your
                            password.
                          </p>
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="text-email"
                                className="form-label"
                              >
                                Email Address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="text-email"
                                placeholder="Enter your email"
                                aria-describedby="emailHelp"
                              />
                            </div>

                            <a
                              href="../main/index.html"
                              className="btn btn-dark w-100 py-8 mb-4 rounded-1"
                            >
                              Forgot Password
                            </a>
                            <NavLink
                              to={'/auth/login'}
                              className="btn bg-primary-subtle text-primary w-100 py-8 mb-4 rounded-1"
                            >
                              Back to Login
                            </NavLink>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 d-none d-xl-block">
                    <div className="row justify-content-center align-items-center h-100 pb-5">
                      <div className="col-lg-9">
                        <div
                          id="auth-login"
                          className="carousel slide auth-carousel"
                          data-bs-ride="carousel"
                        >
                          <div className="carousel-indicators">
                            <button
                              type="button"
                              data-bs-target="#auth-login"
                              data-bs-slide-to="0"
                              className="active"
                              aria-current="true"
                              aria-label="Slide 1"
                            ></button>
                            <button
                              type="button"
                              data-bs-target="#auth-login"
                              data-bs-slide-to="1"
                              aria-label="Slide 2"
                            ></button>
                            <button
                              type="button"
                              data-bs-target="#auth-login"
                              data-bs-slide-to="2"
                              aria-label="Slide 3"
                            ></button>
                          </div>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <div className="d-flex align-items-center justify-content-center w-100 h-100 flex-column gap-9 text-center">
                                <img
                                  src={LoginSlider}
                                  alt="login-side-img"
                                  width="200"
                                  className="img-fluid"
                                />
                                <h4 className="mb-0">Feature Rich 3D Charts</h4>

                                <a
                                  href="javascript:void(0)"
                                  className="btn btn-primary rounded-1"
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="d-flex align-items-center justify-content-center w-100 h-100 flex-column gap-9 text-center">
                                <img
                                  src={LoginSlider}
                                  alt="login-side-img"
                                  width="200"
                                  className="img-fluid"
                                />
                                <h4 className="mb-0">Feature Rich 2D Charts</h4>

                                <a
                                  href="javascript:void(0)"
                                  className="btn btn-primary rounded-1"
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="d-flex align-items-center justify-content-center w-100 h-100 flex-column gap-9 text-center">
                                <img
                                  src={LoginSlider}
                                  alt="login-side-img"
                                  width="200"
                                  className="img-fluid"
                                />
                                <h4 className="mb-0">Feature Rich 1D Charts</h4>

                                <a
                                  href="javascript:void(0)"
                                  className="btn btn-primary rounded-1"
                                >
                                  Learn More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword
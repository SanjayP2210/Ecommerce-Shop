import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/images/logos/logo.svg";
import FBIcon from "../../assets/images/svgs/facebook-icon.svg";
import GoogleIcon from "../../assets/images/svgs/google-icon.svg";
import LoginSlider from "../../assets/images/backgrounds/login-side.png";
import { useDispatch, useSelector } from "react-redux";
import { getJWTToken } from "../../constants/utilities";
import { toast } from "react-toastify";
import { loginUser, createUser } from "../../reducers/authReducer";
import DropzoneComponent from "../../components/DropZone/DropZone";
import UploadImage from "../../components/UploadImage/UploadImage";
import Loader from "../../components/Loader/Loader";
import apiService from "../../service/apiService";

const Login = () => {
  const { pageName } = useParams();
  const [isLoginFlow, setIsLoginFlow] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getJWTToken();
  const [image, setImage] = useState([]);
  const [isPassType, setIsPassType] = useState(true);
  const { isLoggedIn, loginUserData, loading, error, isUserAdded } =
    useSelector((state) => state.auth);

  const [user, setUser] = useState({
      email: "",
      password: "",
  });

  useEffect(() => {
    if (pageName) {
      const isLogin = pageName === "login";
      setIsLoginFlow(isLogin);
      if (!isLogin) {
        setUser({
          ...user,
          name: "",
          mobileNumber: "",
          image: [],
        });
      }
    }
  }, [pageName]);

  useEffect(() => {
    if (!loading && isLoggedIn && loginUserData && token) {
      console.log("loginUserData", loginUserData);
      resetForm();
      navigate("/");
    }
  }, [loginUserData, token]);

  useEffect(() => {
    if (!loading && isUserAdded) {
      resetForm();
      navigate("/auth/login");
    }
  }, [isUserAdded,loading]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const resetForm = () => { 
    setUser({
      email: "",
      password: "",
      mobileNumber: "",
      name: "",
      image: [],
    });
    setImage([]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password, name, mobileNumber } = user;
      if ((isLoginFlow && !email) || !password) {
        toast.error("please fill all the fields");
        return;
      }
      if (!isLoginFlow && (!email || !password || !name || !mobileNumber)) {
        toast.error("please fill all the fields");
        return;
      }
      const formData = new FormData();
      const formKeys = Object.keys(user);
      formKeys.forEach((key) => {
        const keyValue =
          key === "image" && !isLoginFlow
            ? JSON.stringify(image)
            : user[key];
        formData.append(key, keyValue);
      });
      dispatch(isLoginFlow ? loginUser(formData) : createUser(formData));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Loader visible={loading} />
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
                              href="../main/index.html"
                              className="text-nowrap logo-img d-block mb-4 w-100"
                            >
                              <img
                                src={Logo}
                                className="dark-logo"
                                alt="Logo-Dark"
                              />
                            </a>
                            <h2 className="lh-base mb-4">
                              Let`s get you signed in
                            </h2>
                            <div className="row">
                              <div className="col-6 mb-2 mb-sm-0">
                                <a
                                  className="btn btn-white shadow-sm text-dark link-primary border fw-semibold d-flex align-items-center justify-content-center rounded-1 py-6"
                                  href="javascript:void(0)"
                                  role="button"
                                >
                                  <img
                                    src={FBIcon}
                                    alt="matdash-img"
                                    className="img-fluid me-2"
                                    width="18"
                                    height="18"
                                  />
                                  &nbsp; Facebook
                                </a>
                              </div>
                              <div className="col-6">
                                <a
                                  className="btn btn-white shadow-sm text-dark link-primary border fw-semibold d-flex align-items-center justify-content-center rounded-1 py-6"
                                  href="javascript:void(0)"
                                  role="button"
                                >
                                  <img
                                    src={GoogleIcon}
                                    alt="matdash-img"
                                    className="img-fluid me-2"
                                    width="18"
                                    height="18"
                                  />
                                  &nbsp; Google
                                </a>
                              </div>
                            </div>
                            <div className="position-relative text-center my-4">
                              <p className="mb-0 fs-12 px-3 d-inline-block bg-body z-index-5 position-relative">
                                Or sign in with email
                              </p>
                              <span className="border-top w-100 position-absolute top-50 start-50 translate-middle"></span>
                            </div>
                            <form onSubmit={handleSubmit}>
                              {!isLoginFlow && (
                                <>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="text-name"
                                      className="form-label"
                                    >
                                      Name
                                    </label>
                                    <div className="input-group border rounded-1">
                                      <span
                                        className="input-group-text bg-transparent px-6 border-0"
                                        id="basic-addon1"
                                      >
                                        <i className="ti ti-user fs-6"></i>
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control border-0 ps-2"
                                        id="name"
                                        placeholder="Enter your name"
                                        name="name"
                                        required
                                        autoComplete="off"
                                        value={user.name}
                                        onChange={handleInput}
                                      />
                                    </div>
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="text-number"
                                      className="form-label"
                                    >
                                      Mobile Number
                                    </label>
                                    <div className="input-group border rounded-1">
                                      <span
                                        className="input-group-text bg-transparent px-6 border-0"
                                        id="basic-addon1"
                                      >
                                        <i className="ti ti-phone fs-6"></i>
                                      </span>
                                      <input
                                        type="number"
                                        name="mobileNumber"
                                        placeholder="9999999999"
                                        className="form-control border-0 ps-2"
                                        id="mobileNumber"
                                        required
                                        autoComplete="off"
                                        value={user.mobileNumber}
                                        maxLength={10}
                                        onChange={handleInput}
                                        min={0}
                                      />
                                    </div>
                                  </div>
                                </>
                              )}
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleInputEmail1"
                                  className="form-label"
                                >
                                  Email Address
                                </label>
                                <div className="input-group border rounded-1">
                                  <span
                                    className="input-group-text bg-transparent px-6 border-0"
                                    id="basic-addon1"
                                  >
                                    <i className="ti ti-mail fs-6"></i>
                                  </span>
                                  <input
                                    type="email"
                                    className="form-control border-0 ps-2"
                                    placeholder="Enter your email"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                  />
                                </div>
                              </div>
                              <div className="mb-4">
                                <div className="d-flex align-items-center justify-content-between">
                                  <label
                                    htmlFor="password"
                                    className="form-label"
                                  >
                                    Password
                                  </label>
                                  <NavLink
                                    to="/auth/forget-password"
                                    className="text-primary link-dark fs-2"
                                  >
                                    Forgot Password ?
                                  </NavLink>
                                </div>
                                <div className="input-group border rounded-1">
                                  <span
                                    className="input-group-text bg-transparent px-6 border-0"
                                    id="basic-addon1"
                                    onClick={(e) => {
                                      setIsPassType(!isPassType);
                                    }}
                                  >
                                    {isPassType ? (
                                      <i className="ti ti-eye fs-6"></i>
                                    ) : (
                                      <i className="ti ti-eye-off fs-6"></i>
                                    )}
                                  </span>
                                  <input
                                    type={isPassType ? "password" : "text"}
                                    className="form-control border-0 ps-2"
                                    placeholder="Enter your password"
                                    required
                                    name="password"
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInput}
                                  />
                                </div>
                              </div>
                              {!isLoginFlow &&
                              <div className="mb-4">
                                <div className="d-flex align-items-center justify-content-between">
                                  <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                  >
                                    Profile Picture
                                  </label>
                                  <UploadImage
                                    multiple={false}
                                    setImage={setImage}
                                    data={user?.image}
                                  />
                                </div>
                              </div>
                              }
                              <div className="d-flex align-items-center justify-content-between mb-4">
                                <div className="form-check">
                                  <input
                                    className="form-check-input primary"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckChecked"
                                    checked
                                  />
                                  <label
                                    className="form-check-label text-dark"
                                    htmlFor="flexCheckChecked"
                                  >
                                    Keep me logged in
                                  </label>
                                </div>
                              </div>
                              <button
                                className="btn btn-dark w-100 py-8 mb-4 rounded-1"
                                type="submit"
                              >
                                {!isLoginFlow ? "Sign Up" : "Sing In"}
                              </button>
                              <div className="d-flex align-items-center">
                                <p className="fs-12 mb-0 fw-medium">
                                  Don’t have an account yet?
                                </p>
                                <NavLink
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setIsLoginFlow(!isLoginFlow);
                                    navigate(
                                      isLoginFlow
                                        ? "/auth/register"
                                        : "/auth/login"
                                    );
                                  }}
                                  className="text-primary fw-bolder ms-2"
                                >
                                  {isLoginFlow ? "Sign Up" : "Sing In"} Now
                                </NavLink>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 d-none d-xl-block">
                      <div className="row justify-content-center align-items-start h-100">
                        <div className="col-lg-9">
                          <div
                            id="auth-login"
                            className="carousel slide auth-carousel mt-5 pt-4"
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
                                    width="300"
                                    className="img-fluid"
                                  />
                                  <h4 className="mb-0">
                                    Feature Rich 3D Charts
                                  </h4>
                                  <p className="fs-12 mb-0">
                                    Donec justo tortor, malesuada vitae faucibus
                                    ac, tristique sit amet massa. Aliquam
                                    dignissim nec felis quis imperdiet.
                                  </p>
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
                                    width="300"
                                    className="img-fluid"
                                  />
                                  <h4 className="mb-0">
                                    Feature Rich 2D Charts
                                  </h4>
                                  <p className="fs-12 mb-0">
                                    Donec justo tortor, malesuada vitae faucibus
                                    ac, tristique sit amet massa. Aliquam
                                    dignissim nec felis quis imperdiet.
                                  </p>
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
                                    width="300"
                                    className="img-fluid"
                                  />
                                  <h4 className="mb-0">
                                    Feature Rich 1D Charts
                                  </h4>
                                  <p className="fs-12 mb-0">
                                    Donec justo tortor, malesuada vitae faucibus
                                    ac, tristique sit amet massa. Aliquam
                                    dignissim nec felis quis imperdiet.
                                  </p>
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
    </>
  );
};

export default Login;

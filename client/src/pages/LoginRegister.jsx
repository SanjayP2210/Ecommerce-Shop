import { useSelector } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import { useEffect } from "react";
import Loader from "../components/Loader/Loader";
import user3 from "../assets/images/profile/user-3.jpg";
import user1 from "../assets/images/profile/user-1.jpg";
import user2 from "../assets/images/profile/user-2.jpg";
import blogImg2 from "../assets/images/blog/blog-img2.jpg";
import blogImg1 from "../assets/images/blog/blog-img1.jpg";
import blogImg3 from "../assets/images/blog/blog-img3.jpg";
const LoginRegister = () => {
  const { isAdmin, isLoggedIn, loading } = useSelector((state) => state.auth);
  const bodyEle = document.getElementsByTagName("body")[0];
  useEffect(() => {
    // const isHomePage = (window?.location?.pathname = "/");
    if (isLoggedIn) {
      bodyEle.classList.add("banner");
    } else {
      bodyEle.classList.remove("banner");
    }
  }, [bodyEle, location, isLoggedIn]);

  return (
    <div className="login-form">
      <div className="login-container">
        {/* <!-- Sign Up --> */}
        <div className="container__form container--signup signup-scrollbar">
          <Register bodyEle={bodyEle} />
        </div>

        {/* <!-- Sign In --> */}
        <div className="container__form container--signin">
          <Login bodyEle={bodyEle} />
        </div>

        {/* <!-- Overlay --> */}
        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button
                type="button"
                className="btn btn-register"
                id="signIn"
                onClick={() => {
                  const container = document.querySelector(".login-container");
                  container.classList.remove("right-panel-active");
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay__panel overlay--right">
              <button
                className="btn btn-register"
                id="signUp"
                type="button"
                onClick={() => {
                  const container = document.querySelector(".login-container");
                  container.classList.add("right-panel-active");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    /* <div className="row">
        <div className="col-lg-4">
          <div className="card overflow-hidden hover-img">
            <div className="position-relative">
              <a href="#">
                <img
                  src={blogImg1}
                  className="card-img-top"
                  alt="materialM-img"
                />
              </a>
              <span className="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">
                2 min Read
              </span>
              <img
                src={user1}
                alt="materialM-img"
                className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9"
                width="40"
                height="40"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Georgeanna Ramero"
              />
            </div>
            <div className="card-body p-4">
              <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">
                Social
              </span>
              <a
                className="d-block my-4 fs-5 text-dark fw-semibold link-primary"
                href=""
              >
                As yen tumbles, gadget-loving Japan goes for secondhand iPhones
              </a>
              <div className="d-flex align-items-center gap-4">
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-eye text-dark fs-5"></i>9,125
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-message-2 text-dark fs-5"></i>3
                </div>
                <div className="d-flex align-items-center fs-2 ms-auto">
                  <i className="ti ti-point text-dark"></i>Mon, Dec 19
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card overflow-hidden hover-img">
            <div className="position-relative">
              <a href="#">
                <img
                  src={blogImg2}
                  className="card-img-top"
                  alt="materialM-img"
                />
              </a>
              <span className="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">
                2 min Read
              </span>
              <img
                src={user2}
                alt="materialM-img"
                className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9"
                width="40"
                height="40"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Georgeanna Ramero"
              />
            </div>
            <div className="card-body p-4">
              <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">
                Gadget
              </span>
              <a
                className="d-block my-4 fs-5 text-dark fw-semibold link-primary"
                href=""
              >
                Intel loses bid to revive antitrust case against patent foe
                Fortress
              </a>
              <div className="d-flex align-items-center gap-4">
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-eye text-dark fs-5"></i>4,150
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-message-2 text-dark fs-5"></i>38
                </div>
                <div className="d-flex align-items-center fs-2 ms-auto">
                  <i className="ti ti-point text-dark"></i>Sun, Dec 18
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card overflow-hidden hover-img">
            <div className="position-relative">
              <a href="#">
                <img
                  src={blogImg3}
                  className="card-img-top"
                  alt="materialM-img"
                />
              </a>
              <span className="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">
                2 min Read
              </span>
              <img
                src={user3}
                alt="materialM-img"
                className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9"
                width="40"
                height="40"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Georgeanna Ramero"
              />
            </div>
            <div className="card-body p-4">
              <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">
                Health
              </span>
              <a
                className="d-block my-4 fs-5 text-dark fw-semibold link-primary"
                href=""
              >
                COVID outbreak deepens as more lockdowns loom in China
              </a>
              <div className="d-flex align-items-center gap-4">
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-eye text-dark fs-5"></i>9,480
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-message-2 text-dark fs-5"></i>12
                </div>
                <div className="d-flex align-items-center fs-2 ms-auto">
                  <i className="ti ti-point text-dark"></i>Sat, Dec 17
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
  );
};

export default LoginRegister;

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../reducers/authReducer";
import { getJWTToken } from "../constants/utilities";
import Loader from "../components/Loader/Loader";

const Login = ({ bodyEle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = getJWTToken();
  const location = useLocation();
  console.log("location", location);
  const { isLoggedIn, loginUserData, loading, error } = useSelector(
    (state) => state.auth
  );
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!loading && isLoggedIn && loginUserData && token) {
      console.log("loginUserData", loginUserData);
      setUser({
        email: "",
        password: "",
      });
      // if (loginUserData?.isAdmin) {
      //   navigate("/admin/users");
      // } else {
      // }
      navigate("/home");
      bodyEle.classList.add("banner");
    }
  }, [loginUserData, token]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (!email || !password) {
      toast.error("please fill all the fields");
      return;
    }
    try {
      dispatch(loginUser(user));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Loader visible={loading} />
      {location?.pathname === "/login" ? (
        <section>
          <main>
            <div className="container">
              <div className="contact-content">
                <h1 className="main-heading">Login form</h1>
              </div>
              <div className="section-registration">
                <div className="main-container grid grid-two-cols">
                  <div className="registration-form">
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="email">email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="enter your email"
                          id="email"
                          required
                          autoComplete="off"
                          value={user.email}
                          onChange={handleInput}
                        />
                      </div>

                      <div>
                        <label htmlFor="password">password</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="password"
                          id="password1"
                          required
                          autoComplete="off"
                          value={user.password}
                          onChange={handleInput}
                        />
                        <span
                          id="togglePassword"
                          className="login-eye-icon"
                          onClick={(e) => {
                            const passwordInput =
                              document.getElementById("password1");
                            const type =
                              passwordInput.getAttribute("type") === "password"
                                ? "text"
                                : "password";
                            passwordInput.setAttribute("type", type);

                            // Toggle the eye icon (optional)
                            e.target.textContent =
                              type === "password" ? "👁️" : "👁️‍🗨️";
                          }}
                        >
                          👁️
                        </span>
                      </div>

                      <br />
                      <button type="submit" className="btn">
                        Login Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      ) : (
        <form onSubmit={handleSubmit} className="form" id="form2">
          <h2 className="form__title">Sign In</h2>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="enter your email"
            id="email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            name="password"
            id="password2"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInput}
          />
          <div>
            <span
              id="togglePassword"
              className="login-eye-icon"
              onClick={(e) => {
                const passwordInput = document.getElementById("password2");
                const type =
                  passwordInput.getAttribute("type") === "password"
                    ? "text"
                    : "password";
                passwordInput.setAttribute("type", type);

                // Toggle the eye icon (optional)
                e.target.textContent = type === "password" ? "👁️" : "👁️‍🗨️";
              }}
            >
              👁️
            </span>
          </div>
          <Link to="/forget-password" className="link">
            Forgot your password?
          </Link>
          <button className="btn btn-register" type="submit">
            Sign In
          </button>
        </form>
      )}
    </>
  );
};

export default Login;

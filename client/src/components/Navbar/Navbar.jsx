import Logo from "../../assets/images/logos/Logo.png";
import megaDDBG from "../../assets/images/backgrounds/mega-dd-bg.jpg";
import iconFlagEn from "../../assets/images/flag/icon-flag-en.svg";
import iconFlagCn from "../../assets/images/flag/icon-flag-cn.svg";
import iconFlagFr from "../../assets/images/flag/icon-flag-fr.svg";
import iconFlagSa from "../../assets/images/flag/icon-flag-sa.svg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../reducers/cartReducer";
import { setThemeAttributes } from "../../constants/utilities";
import { toast } from "react-toastify";
import apiService from "../../service/apiService";
import { useEffect } from "react";

const Navbar = () => {
  const {
    isAdmin,
    isLoggedIn,
    loginUserData: user,
  } = useSelector((state) => state.auth);
  const {
    totalCount: cartCount,
    items,
    totalPrice,
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("items", items);

  useEffect(() => {
    if (user?.themeColor === "light") {
      setThemeAttributes("light", "light-logo", "dark-logo", "sun", "moon");
    } else {
      setThemeAttributes("dark", "dark-logo", "light-logo", "moon", "sun");
    }
  }, [user?.themeColor]);

  const handleColorTheme = async(color) => {
    try {
      const response = await apiService.putRequest(`user/theme/${user?._id}`, {
        color: color,
      });
      if(response?.isError){
        toast.error("error while update theme", response?.message);
      } else {
        let loginData = JSON.parse(localStorage.getItem("loginUserData"));
        if(color === 'light'){
          setThemeAttributes("light","light-logo","dark-logo", "sun","moon");
        } else {
          setThemeAttributes("dark", "dark-logo", "light-logo", "moon", "sun");
        }
        loginData = {
          ...loginData,
          themeColor:color
        };
        localStorage.setItem("loginUserData", JSON.stringify(loginData));
      }
      } catch (error) {
        toast.error('error while update theme',error);
      }
    }

  return (
    <>
      <header className="topbar">
        <div className="with-vertical">
          <nav className="navbar navbar-expand-lg p-0">
            <ul className="navbar-nav">
              <li className="nav-item d-flex d-xl-none">
                <Link
                  className="nav-link nav-icon-hover-bg rounded-circle  sidebartoggler "
                  id="headerCollapse"
                  href="javascript:void(0)"
                >
                  <Icon
                    icon="solar:hamburger-menu-line-duotone"
                    className={"fs-6"}
                  ></Icon>
                </Link>
              </li>
              <li className="nav-item d-none d-xl-flex nav-icon-hover-bg rounded-circle">
                <Link
                  className="nav-link"
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <Icon icon="solar:magnifer-linear" className={"fs-6"}></Icon>
                </Link>
              </li>
              <li className="nav-item d-none d-lg-flex dropdown nav-icon-hover-bg rounded-circle">
                <div className="hover-dd">
                  <Link
                    className="nav-link"
                    id="drop2"
                    href="javascript:void(0)"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Icon
                      icon="solar:widget-3-line-duotone"
                      className={"fs-6"}
                    ></Icon>
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0 overflow-hidden"
                    aria-labelledby="drop2"
                  >
                    <div className="position-relative">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="p-4 pb-3">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="position-relative">
                                  <Link
                                    href="../main/app-chat.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-primary-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:chat-line-bold-duotone"
                                        className="fs-7 text-primary"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">Chat Application</h6>
                                      <span className="fs-11 d-block text-body-color">
                                        New messages arrived
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="../main/app-invoice.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-secondary-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:bill-list-bold-duotone"
                                        className="fs-7 text-secondary"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">Invoice App</h6>
                                      <span className="fs-11 d-block text-body-color">
                                        Get latest invoice
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="../main/app-contact2.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-warning-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:phone-calling-rounded-bold-duotone"
                                        className="fs-7 text-warning"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">
                                        Contact Application
                                      </h6>
                                      <span className="fs-11 d-block text-body-color">
                                        2 Unsaved Contacts
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="../main/app-email.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-danger-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:letter-bold-duotone"
                                        className="fs-7 text-danger"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">Email App</h6>
                                      <span className="fs-11 d-block text-body-color">
                                        Get new emails
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="position-relative">
                                  {/* <Link
                                    href="../main/page-user-profile.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  > */}
                                  <Link
                                    to="/profile"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-primary-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:user-bold-duotone"
                                        className="fs-7 text-success"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">User Profile</h6>
                                      <span className="fs-11 d-block text-body-color">
                                        learn more information
                                      </span>
                                    </div>
                                    {/* </Link> */}
                                  </Link>
                                  <Link
                                    href="../main/app-calendar.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-primary-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:calendar-minimalistic-bold-duotone"
                                        className="fs-7 text-primary"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">Calendar App</h6>
                                      <span className="fs-11 d-block text-body-color">
                                        Get dates
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="../main/app-contact.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-secondary-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:smartphone-2-bold-duotone"
                                        className="fs-7 text-secondary"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">
                                        Contact List Table
                                      </h6>
                                      <span className="fs-11 d-block text-body-color">
                                        Add new contact
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="../main/app-notes.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-warning-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:notes-bold-duotone"
                                        className="fs-7 text-warning"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">
                                        Notes Application
                                      </h6>
                                      <span className="fs-11 d-block text-body-color">
                                        To-do and Daily tasks
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 d-none d-lg-flex">
                          <img
                            src={megaDDBG}
                            alt="mega-dd"
                            className="img-fluid mega-dd-bg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className="d-block d-lg-none py-9 py-xl-0">
              <img src={Logo} alt="matdash-img" />
            </div>
            <Link
              className="navbar-toggler p-0 border-0 nav-icon-hover-bg rounded-circle"
              href="javascript:void(0)"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Icon
                icon="solar:menu-dots-bold-duotone"
                className={"fs-6"}
              ></Icon>
            </Link>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <div className="d-flex align-items-center justify-content-between">
                <ul className="navbar-nav flex-row mx-auto ms-lg-auto align-items-center justify-content-center">
                  <li className="nav-item dropdown">
                    <Link
                      href="javascript:void(0)"
                      className="nav-link nav-icon-hover-bg rounded-circle d-flex d-lg-none align-items-center justify-content-center"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#mobilenavbar"
                      aria-controls="offcanvasWithBothOptions"
                    >
                      <Icon
                        icon="solar:sort-line-duotone"
                        className={"fs-6"}
                      ></Icon>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link moon dark-layout nav-icon-hover-bg rounded-circle"
                      href="javascript:void(0)"
                      onClick={(e) => {
                        e.preventDefault();
                        handleColorTheme('dark');
                      }}
                      style={{ padding: "0px" }}
                    >
                      <Icon
                        icon="solar:moon-line-duotone"
                        className={"moon fs-6"}
                      ></Icon>
                    </Link>
                    <Link
                      className="nav-link sun light-layout nav-icon-hover-bg rounded-circle"
                      href="javascript:void(0)"
                      onClick={(e) => {
                        e.preventDefault();
                        handleColorTheme('light');
                      }}
                      style={{ display: "none" }}
                    >
                      <Icon
                        icon="solar:sun-2-line-duotone"
                        className={"sun fs-6"}
                      ></Icon>
                    </Link>
                  </li>
                  <li className="nav-item d-block d-xl-none">
                    <Link
                      className="nav-link nav-icon-hover-bg rounded-circle"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <Icon
                        icon="solar:className=-large-2-line-duotone"
                        className={"fs-6"}
                      ></Icon>
                    </Link>
                  </li>
                  <li className="nav-item dropdown nav-icon-hover-bg rounded-circle">
                    <Link
                      className="nav-link position-relative"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <Icon
                        icon="solar:magnifer-line-duotone"
                        className={"fs-6"}
                      ></Icon>
                    </Link>
                  </li>

                  <li className="nav-item dropdown nav-icon-hover-bg rounded-circle">
                    <Link
                      className="nav-link position-relative"
                      href="javascript:void(0)"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <Icon
                        icon="solar:bell-bing-line-duotone"
                        className={"fs-6"}
                      ></Icon>
                    </Link>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="d-flex align-items-center justify-content-between py-3 px-7">
                        <h5 className="mb-0 fs-5 fw-semibold">Notifications</h5>
                        <span className="badge text-bg-primary rounded-4 px-3 py-1 lh-sm">
                          5 new
                        </span>
                      </div>
                      <div className="message-body" data-simplebar>
                        <Link
                          href="javascript:void(0)"
                          className="py-6 px-7 d-flex align-items-center dropdown-item gap-3"
                        >
                          <span className="flex-shrink-0 bg-danger-subtle rounded-circle round d-flex align-items-center justify-content-center fs-6 text-danger">
                            <Icon icon="solar:widget-3-line-duotone"></Icon>
                          </span>
                          <div className="w-75">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="mb-1 fw-semibold">Launch Admin</h6>
                              <span className="d-block fs-2">9:30 AM</span>
                            </div>
                            <span className="d-block text-truncate text-truncate fs-11">
                              Just see the my new admin!
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="py-6 px-7 d-flex align-items-center dropdown-item gap-3"
                        >
                          <span className="flex-shrink-0 bg-primary-subtle rounded-circle round d-flex align-items-center justify-content-center fs-6 text-primary">
                            <Icon icon="solar:calendar-line-duotone"></Icon>
                          </span>
                          <div className="w-75">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="mb-1 fw-semibold">Event today</h6>
                              <span className="d-block fs-2">9:15 AM</span>
                            </div>
                            <span className="d-block text-truncate text-truncate fs-11">
                              Just a reminder that you have event
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="py-6 px-7 d-flex align-items-center dropdown-item gap-3"
                        >
                          <span className="flex-shrink-0 bg-secondary-subtle rounded-circle round d-flex align-items-center justify-content-center fs-6 text-secondary">
                            <Icon icon="solar:settings-line-duotone"></Icon>
                          </span>
                          <div className="w-75">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="mb-1 fw-semibold">Settings</h6>
                              <span className="d-block fs-2">4:36 PM</span>
                            </div>
                            <span className="d-block text-truncate text-truncate fs-11">
                              You can customize this template as you want
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="py-6 px-7 d-flex align-items-center dropdown-item gap-3"
                        >
                          <span className="flex-shrink-0 bg-warning-subtle rounded-circle round d-flex align-items-center justify-content-center fs-6 text-warning">
                            <Icon icon="solar:widget-4-line-duotone"></Icon>
                          </span>
                          <div className="w-75">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="mb-1 fw-semibold">Launch Admin</h6>
                              <span className="d-block fs-2">9:30 AM</span>
                            </div>
                            <span className="d-block text-truncate text-truncate fs-11">
                              Just see the my new admin!
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="py-6 px-7 d-flex align-items-center dropdown-item gap-3"
                        >
                          <span className="flex-shrink-0 bg-primary-subtle rounded-circle round d-flex align-items-center justify-content-center fs-6 text-primary">
                            <Icon icon="solar:calendar-line-duotone"></Icon>
                          </span>
                          <div className="w-75">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="mb-1 fw-semibold">Event today</h6>
                              <span className="d-block fs-2">9:15 AM</span>
                            </div>
                            <span className="d-block text-truncate text-truncate fs-11">
                              Just a reminder that you have event
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="py-6 px-7 d-flex align-items-center dropdown-item gap-3"
                        >
                          <span className="flex-shrink-0 bg-secondary-subtle rounded-circle round d-flex align-items-center justify-content-center fs-6 text-secondary">
                            <Icon icon="solar:settings-line-duotone"></Icon>
                          </span>
                          <div className="w-75">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="mb-1 fw-semibold">Settings</h6>
                              <span className="d-block fs-2">4:36 PM</span>
                            </div>
                            <span className="d-block text-truncate text-truncate fs-11">
                              You can customize this template as you want
                            </span>
                          </div>
                        </Link>
                      </div>
                      <div className="py-6 px-7 mb-1">
                        <button className="btn btn-primary w-100">
                          See All Notifications
                        </button>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown nav-icon-hover-bg rounded-circle">
                    <Link
                      className="nav-link"
                      href="javascript:void(0)"
                      id="drop2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={iconFlagEn}
                        alt="matdash-img"
                        width="20px"
                        height="20px"
                        className="rounded-circle object-fit-cover round-20"
                      />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <Link
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagEn}
                              alt="matdash-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">English (UK)</p>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagCn}
                              alt="matdash-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">中国人 (Chinese)</p>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagFr}
                              alt="matdash-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">français (French)</p>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagSa}
                              alt="matdash-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">عربي (Arabic)</p>
                        </Link>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      href="javascript:void(0)"
                      id="drop1"
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center gap-2 lh-base">
                        <img
                          src={user?.image?.url}
                          className="rounded-circle"
                          width="35"
                          height="35"
                          alt="matdash-img"
                        />
                        <Icon
                          icon="solar:alt-arrow-down-bold"
                          className="fs-2"
                        ></Icon>
                      </div>
                    </Link>
                    <div
                      className="dropdown-menu profile-dropdown dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop1"
                    >
                      <div className="position-relative px-4 pt-3 pb-2">
                        <div className="d-flex align-items-center mb-3 pb-3 border-bottom gap-6">
                          <img
                            src={user?.image?.url}
                            className="rounded-circle"
                            width="56"
                            height="56"
                            alt="matdash-img"
                          />
                          <div>
                            <h5 className="mb-0 fs-12">{user?.name} </h5>
                            <p className="mb-0 text-dark">{user?.email}</p>
                          </div>
                        </div>
                        <div className="message-body">
                          <Link
                            to="/profile"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            {/* <Link
                            href="../main/page-user-profile.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          > */}
                            My Profile
                          </Link>
                          <Link
                            href="../main/page-pricing.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            My Subscription
                          </Link>
                          <Link
                            href="../main/app-invoice.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            My Invoice{" "}
                            <span className="badge bg-danger-subtle text-danger rounded ms-8">
                              4
                            </span>
                          </Link>
                          <Link
                            href="../main/page-account-settings.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            Account Settings
                          </Link>
                          <Link
                            to={"/Logout"}
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            Sign Out
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div
            className="offcanvas offcanvas-start pt-0"
            data-bs-scroll="true"
            tabIndex="-1"
            id="mobilenavbar"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <nav className="sidebar-nav scroll-sidebar">
              <div className="offcanvas-header justify-content-between">
                <Link to="/" className="text-nowrap logo-img">
                  <img src="../assets/images/logos/logo-icon.svg" alt="Logo" />
                </Link>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="offcanvas-body pt-0"
                data-simplebar
                style={{ height: "calc(100vh - 80px)" }}
              >
                <ul id="sidebarnav">
                  <li className="sidebar-item">
                    <Link
                      className="sidebar-link has-arrow ms-0"
                      href="javascript:void(0)"
                      aria-expanded="false"
                    >
                      <span>
                        <Icon
                          icon="solar:slider-vertical-line-duotone"
                          className={"fs-7"}
                        ></Icon>
                      </span>
                      <span className="hide-menu">Apps</span>
                    </Link>
                    <ul
                      aria-expanded="false"
                      className="collapse first-level my-3 ps-3"
                    >
                      <li className="sidebar-item py-2">
                        <Link
                          href="../main/app-chat.html"
                          className="d-flex align-items-center"
                        >
                          <div className="bg-primary-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                            <Icon
                              icon="solar:chat-line-bold-duotone"
                              className="fs-7 text-primary"
                            ></Icon>
                          </div>
                          <div>
                            <h6 className="mb-0 bg-hover-primary">
                              Chat Application
                            </h6>
                            <span className="fs-11 d-block text-body-color">
                              New messages arrived
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="sidebar-item py-2">
                        <Link
                          href="../main/app-invoice.html"
                          className="d-flex align-items-center"
                        >
                          <div className="bg-secondary-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                            <Icon
                              icon="solar:bill-list-bold-duotone"
                              className="fs-7 text-secondary"
                            ></Icon>
                          </div>
                          <div>
                            <h6 className="mb-0 bg-hover-primary">
                              Invoice App
                            </h6>
                            <span className="fs-11 d-block text-body-color">
                              Get latest invoice
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="sidebar-item py-2">
                        <Link
                          href="../main/app-contact2.html"
                          className="d-flex align-items-center"
                        >
                          <div className="bg-warning-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                            <Icon
                              icon="solar:phone-calling-rounded-bold-duotone"
                              className="fs-7 text-warning"
                            ></Icon>
                          </div>
                          <div>
                            <h6 className="mb-0 bg-hover-primary">
                              Contact Application
                            </h6>
                            <span className="fs-11 d-block text-body-color">
                              2 Unsaved Contacts
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="sidebar-item py-2">
                        <Link
                          href="../main/app-email.html"
                          className="d-flex align-items-center"
                        >
                          <div className="bg-danger-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                            <Icon
                              icon="solar:letter-bold-duotone"
                              className="fs-7 text-danger"
                            ></Icon>
                          </div>
                          <div>
                            <h6 className="mb-0 bg-hover-primary">Email App</h6>
                            <span className="fs-11 d-block text-body-color">
                              Get new emails
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="sidebar-item py-2">
                        <Link
                          to="/profile"
                          className="d-flex align-items-center"
                        >
                          {/* <Link
                          href="../main/page-user-profile.html"
                          className="d-flex align-items-center"
                        > */}
                          <div className="bg-success-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                            <Icon
                              icon="solar:user-bold-duotone"
                              className="fs-7 text-success"
                            ></Icon>
                          </div>
                          <div>
                            <h6 className="mb-0 bg-hover-primary">
                              User Profile
                            </h6>
                            <span className="fs-11 d-block text-body-color">
                              learn more information
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="sidebar-item py-2">
                        <Link
                          href="../main/app-calendar.html"
                          className="d-flex align-items-center"
                        >
                          <div className="bg-primary-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                            <Icon
                              icon="solar:calendar-minimalistic-bold-duotone"
                              className="fs-7 text-primary"
                            ></Icon>
                          </div>
                          <div>
                            <h6 className="mb-0 bg-hover-primary">
                              Calendar App
                            </h6>
                            <span className="fs-11 d-block text-body-color">
                              Get dates
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="sidebar-item py-2">
                        <Link
                          href="../main/app-contact.html"
                          className="d-flex align-items-center"
                        >
                          <div className="bg-secondary-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                            <Icon
                              icon="solar:smartphone-2-bold-duotone"
                              className="fs-7 text-secondary"
                            ></Icon>
                          </div>
                          <div>
                            <h6 className="mb-0 bg-hover-primary">
                              Contact List Table
                            </h6>
                            <span className="fs-11 d-block text-body-color">
                              Add new contact
                            </span>
                          </div>
                        </Link>
                      </li>
                      <li className="sidebar-item py-2">
                        <Link
                          href="../main/app-notes.html"
                          className="d-flex align-items-center"
                        >
                          <div className="bg-warning-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                            <Icon
                              icon="solar:notes-bold-duotone"
                              className="fs-7 text-warning"
                            ></Icon>
                          </div>
                          <div>
                            <h6 className="mb-0 bg-hover-primary">
                              Notes Application
                            </h6>
                            <span className="fs-11 d-block text-body-color">
                              To-do and Daily tasks
                            </span>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="app-header with-horizontal">
          <nav className="navbar navbar-expand-xl container-fluid p-0">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item d-flex d-xl-none">
                <Link
                  className="nav-link sidebartoggler nav-icon-hover-bg rounded-circle"
                  id="sidebarCollapse"
                  href="javascript:void(0)"
                >
                  <Icon
                    icon="solar:hamburger-menu-line-duotone"
                    className={"fs-7"}
                  ></Icon>
                </Link>
              </li>
              <li className="nav-item d-none d-xl-flex align-items-center">
                <Link to="/" className="text-nowrap nav-link">
                  <img src={Logo} style={{ width: "50px" }} alt="matdash-img" />
                </Link>
              </li>
              <li className="nav-item d-none d-xl-flex align-items-center nav-icon-hover-bg rounded-circle">
                <Link
                  className="nav-link"
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <Icon icon="solar:magnifer-linear" className={"fs-6"}></Icon>
                </Link>
              </li>
              <li className="nav-item d-none d-lg-flex align-items-center dropdown nav-icon-hover-bg rounded-circle">
                <div className="hover-dd">
                  <Link
                    className="nav-link"
                    id="drop2"
                    href="javascript:void(0)"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Icon
                      icon="solar:widget-3-line-duotone"
                      className={"fs-6"}
                    ></Icon>
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0 overflow-hidden"
                    aria-labelledby="drop2"
                  >
                    <div className="position-relative">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="p-4 pb-3">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="position-relative">
                                  <Link
                                    href="../main/app-chat.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-primary-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:chat-line-bold-duotone"
                                        className="fs-7 text-primary"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">Chat Application</h6>
                                      <span className="fs-11 d-block text-body-color">
                                        New messages arrived
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="../main/app-invoice.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-secondary-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:bill-list-bold-duotone"
                                        className="fs-7 text-secondary"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">Invoice App</h6>
                                      <span className="fs-11 d-block text-body-color">
                                        Get latest invoice
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="../main/app-contact2.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-warning-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:phone-calling-rounded-bold-duotone"
                                        className="fs-7 text-warning"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">
                                        Contact Application
                                      </h6>
                                      <span className="fs-11 d-block text-body-color">
                                        2 Unsaved Contacts
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="../main/app-email.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-danger-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:letter-bold-duotone"
                                        className="fs-7 text-danger"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">Email App</h6>
                                      <span className="fs-11 d-block text-body-color">
                                        Get new emails
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="position-relative">
                                  <Link
                                    to="/profile"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-success-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:user-bold-duotone"
                                        className="fs-7 text-success"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">User Profile</h6>
                                      <span className="fs-11 d-block text-body-color">
                                        learn more information
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="../main/app-calendar.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-primary-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:calendar-minimalistic-bold-duotone"
                                        className="fs-7 text-primary"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">Calendar App</h6>
                                      <span className="fs-11 d-block text-body-color">
                                        Get dates
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="../main/app-contact.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-secondary-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:smartphone-2-bold-duotone"
                                        className="fs-7 text-secondary"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">
                                        Contact List Table
                                      </h6>
                                      <span className="fs-11 d-block text-body-color">
                                        Add new contact
                                      </span>
                                    </div>
                                  </Link>
                                  <Link
                                    href="../main/app-notes.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  >
                                    <div className="bg-warning-subtle rounded round-48 me-3 d-flex align-items-center justify-content-center">
                                      <Icon
                                        icon="solar:notes-bold-duotone"
                                        className="fs-7 text-warning"
                                      ></Icon>
                                    </div>
                                    <div>
                                      <h6 className="mb-0">
                                        Notes Application
                                      </h6>
                                      <span className="fs-11 d-block text-body-color">
                                        To-do and Daily tasks
                                      </span>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 d-none d-lg-flex">
                          <img
                            src={megaDDBG}
                            alt="mega-dd"
                            className="img-fluid mega-dd-bg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="d-block d-xl-none">
              <Link to="/" className="text-nowrap nav-link">
                <img src={Logo} style={{ width: "50px" }} alt="matdash-img" />
              </Link>
            </div>
            <Link
              className="navbar-toggler nav-icon-hover p-0 border-0 nav-icon-hover-bg rounded-circle"
              href="javascript:void(0)"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="p-2">
                <i className="ti ti-dots fs-7"></i>
              </span>
            </Link>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <div className="d-flex align-items-center justify-content-between px-0 px-xl-8">
                <ul className="navbar-nav flex-row mx-auto ms-lg-auto align-items-center justify-content-center">
                  <li className="nav-item dropdown">
                    <Link
                      href="javascript:void(0)"
                      className="nav-link nav-icon-hover-bg rounded-circle d-flex d-lg-none align-items-center justify-content-center"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#mobilenavbar"
                      aria-controls="offcanvasWithBothOptions"
                    >
                      <Icon
                        icon="solar:sort-line-duotone"
                        className={"fs-6"}
                      ></Icon>
                    </Link>
                  </li>
                  <li className="nav-item d-block d-xl-none">
                    <Link
                      className="nav-link nav-icon-hover-bg rounded-circle"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <Icon
                        icon="solar:magnifer-line-duotone"
                        className={"fs-6"}
                      ></Icon>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      type="button"
                      className="position-relative fs-6 text-decoration-none"
                      style={{ color: "#526b7a" }}
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <i className="ti ti-shopping-cart"></i>
                      {cartCount > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                          {cartCount}
                          <span className="visually-hidden">
                            unread messages
                          </span>
                        </span>
                      )}
                    </Link>
                  </li>
                  <li className="nav-item  nav-icon-hover-bg rounded-circle moon dark-layout">
                    <Link
                      className="nav-link"
                      href="javascript:void(0)"
                      onClick={(e) => {
                        e.preventDefault();
                        handleColorTheme('dark');
                      }}
                    >
                      <Icon
                        icon="solar:moon-line-duotone"
                        className={"moon fs-6"}
                      ></Icon>
                    </Link>
                  </li>
                  <li
                    className="nav-item nav-icon-hover-bg rounded-circle sun light-layout"
                    style={{ display: "none" }}
                  >
                    <Link
                      className="nav-link"
                      href="javascript:void(0)"
                      onClick={(e) => {
                        e.preventDefault();
                        handleColorTheme('light')
                      }}
                    >
                      <Icon
                        icon="solar:sun-line-duotone"
                        className={"sun fs-6"}
                        style={{ fontSize: "24px" }}
                      ></Icon>
                    </Link>
                  </li>
                  <li className="nav-item dropdown nav-icon-hover-bg rounded-circle">
                    <Link
                      className="nav-link position-relative"
                      href="javascript:void(0)"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <Icon
                        icon="solar:bell-bing-line-duotone"
                        className={"fs-6"}
                      ></Icon>
                    </Link>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="d-flex align-items-center justify-content-between py-3 px-7">
                        <h5 className="mb-0 fs-5 fw-semibold">Notifications</h5>
                        <span className="badge text-bg-primary rounded-4 px-3 py-1 lh-sm">
                          5 new
                        </span>
                      </div>
                      <div className="message-body" data-simplebar>
                        <Link
                          href="javascript:void(0)"
                          className="py-6 px-7 d-flex align-items-center dropdown-item gap-3"
                        >
                          <span className="flex-shrink-0 bg-danger-subtle rounded-circle round d-flex align-items-center justify-content-center fs-6 text-danger">
                            <Icon icon="solar:widget-3-line-duotone"></Icon>
                          </span>
                          <div className="w-75">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="mb-1 fw-semibold">Launch Admin</h6>
                              <span className="d-block fs-2">9:30 AM</span>
                            </div>
                            <span className="d-block text-truncate text-truncate fs-11">
                              Just see the my new admin!
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="py-6 px-7 d-flex align-items-center dropdown-item gap-3"
                        >
                          <span className="flex-shrink-0 bg-primary-subtle rounded-circle round d-flex align-items-center justify-content-center fs-6 text-primary">
                            <Icon icon="solar:calendar-line-duotone"></Icon>
                          </span>
                          <div className="w-75">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="mb-1 fw-semibold">Event today</h6>
                              <span className="d-block fs-2">9:15 AM</span>
                            </div>
                            <span className="d-block text-truncate text-truncate fs-11">
                              Just a reminder that you have event
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="py-6 px-7 d-flex align-items-center dropdown-item gap-3"
                        >
                          <span className="flex-shrink-0 bg-secondary-subtle rounded-circle round d-flex align-items-center justify-content-center fs-6 text-secondary">
                            <Icon icon="solar:settings-line-duotone"></Icon>
                          </span>
                          <div className="w-75">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="mb-1 fw-semibold">Settings</h6>
                              <span className="d-block fs-2">4:36 PM</span>
                            </div>
                            <span className="d-block text-truncate text-truncate fs-11">
                              You can customize this template as you want
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="py-6 px-7 d-flex align-items-center dropdown-item gap-3"
                        >
                          <span className="flex-shrink-0 bg-warning-subtle rounded-circle round d-flex align-items-center justify-content-center fs-6 text-warning">
                            <Icon icon="solar:widget-4-line-duotone"></Icon>
                          </span>
                          <div className="w-75">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="mb-1 fw-semibold">Launch Admin</h6>
                              <span className="d-block fs-2">9:30 AM</span>
                            </div>
                            <span className="d-block text-truncate text-truncate fs-11">
                              Just see the my new admin!
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="py-6 px-7 d-flex align-items-center dropdown-item gap-3"
                        >
                          <span className="flex-shrink-0 bg-primary-subtle rounded-circle round d-flex align-items-center justify-content-center fs-6 text-primary">
                            <Icon icon="solar:calendar-line-duotone"></Icon>
                          </span>
                          <div className="w-75">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="mb-1 fw-semibold">Event today</h6>
                              <span className="d-block fs-2">9:15 AM</span>
                            </div>
                            <span className="d-block text-truncate text-truncate fs-11">
                              Just a reminder that you have event
                            </span>
                          </div>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="py-6 px-7 d-flex align-items-center dropdown-item gap-3"
                        >
                          <span className="flex-shrink-0 bg-secondary-subtle rounded-circle round d-flex align-items-center justify-content-center fs-6 text-secondary">
                            <Icon icon="solar:settings-line-duotone"></Icon>
                          </span>
                          <div className="w-75">
                            <div className="d-flex align-items-center justify-content-between">
                              <h6 className="mb-1 fw-semibold">Settings</h6>
                              <span className="d-block fs-2">4:36 PM</span>
                            </div>
                            <span className="d-block text-truncate text-truncate fs-11">
                              You can customize this template as you want
                            </span>
                          </div>
                        </Link>
                      </div>
                      <div className="py-6 px-7 mb-1">
                        <button className="btn btn-primary w-100">
                          See All Notifications
                        </button>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown nav-icon-hover-bg rounded-circle">
                    <Link
                      className="nav-link"
                      href="javascript:void(0)"
                      id="drop2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={iconFlagEn}
                        alt="matdash-img"
                        width="20px"
                        height="20px"
                        className="rounded-circle object-fit-cover round-20"
                      />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <Link
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagEn}
                              alt="matdash-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">English (UK)</p>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagCn}
                              alt="matdash-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">中国人 (Chinese)</p>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagFr}
                              alt="matdash-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">français (French)</p>
                        </Link>
                        <Link
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                        >
                          <div className="position-relative">
                            <img
                              src={iconFlagSa}
                              alt="matdash-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">عربي (Arabic)</p>
                        </Link>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link"
                      href="javascript:void(0)"
                      id="drop1"
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center gap-2 lh-base">
                        <img
                          src={user?.image?.url}
                          className="rounded-circle"
                          width="35"
                          height="35"
                          alt="matdash-img"
                        />
                        <Icon
                          icon="solar:alt-arrow-down-bold"
                          className="fs-2"
                        ></Icon>
                      </div>
                    </Link>
                    <div
                      className="dropdown-menu profile-dropdown dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop1"
                    >
                      <div className="position-relative px-4 pt-3 pb-2">
                        <div className="d-flex align-items-center mb-3 pb-3 border-bottom gap-6">
                          <img
                            src={user?.image?.url}
                            className="rounded-circle"
                            width="56"
                            height="56"
                            alt="matdash-img"
                          />
                          <div>
                            <h5 className="mb-0 fs-12">{user?.name}</h5>
                            <p className="mb-0 text-dark">{user?.email}</p>
                          </div>
                        </div>
                        <div className="message-body">
                          <Link
                            to="/profile"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            My Profile
                          </Link>
                          <Link
                            href="../main/page-pricing.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            My Subscription
                          </Link>
                          <Link
                            href="../main/app-invoice.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            My Invoice{" "}
                            <span className="badge bg-danger-subtle text-danger rounded ms-8">
                              4
                            </span>
                          </Link>
                          <Link
                            href="../main/page-account-settings.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            Account Settings
                          </Link>
                          <Link
                            to={"/Logout"}
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            Sign Out
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <aside className="left-sidebar with-horizontal">
        <div>
          <nav
            id="sidebarnavh"
            className="sidebar-nav scroll-sidebar container-fluid"
          >
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Home</span>
              </li>

              <li className="sidebar-item selected">
                <Link
                  className="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <span>
                    <Icon
                      icon="solar:layers-line-duotone"
                      className={"ti"}
                    ></Icon>
                  </span>
                  <span className="hide-menu">Dashboard</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link to="/" className="sidebar-link">
                      <i className="ti ti-aperture"></i>
                      <span className="hide-menu">Dashboard 1</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link href="../main/index2.html" className="sidebar-link">
                      <i className="ti ti-shopping-className="></i>
                      <span className="hide-menu">Dashboard 2</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link href="../main/index3.html" className="sidebar-link">
                      <i className="ti ti-atom"></i>
                      <span className="hide-menu">Dashboard 3</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Apps</span>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link two-column has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <span>
                    <Icon
                      icon="solar:widget-line-duotone"
                      className="ti"
                    ></Icon>
                  </span>
                  <span className="hide-menu">Eccommerce</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link
                      href="../main/app-invoice.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-file-text"></i>
                      <span className="hide-menu">Invoice</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/profile" className="sidebar-link">
                      <i className="ti ti-user-circle"></i>
                      <span className="hide-menu">User Profile</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/eccommerce/shop" className="sidebar-link">
                      <i className="ti ti-shopping-className="></i>
                      <span className="hide-menu">Shop</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="/eccommerce/product-details"
                      className="sidebar-link"
                    >
                      <i className="ti ti-basket"></i>
                      <span className="hide-menu">Product Detail</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="/eccommerce/product-list"
                      className="sidebar-link"
                    >
                      <i className="ti ti-list-check"></i>
                      <span className="hide-menu">List</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="/eccommerce/checkout-product"
                      className="sidebar-link"
                    >
                      <i className="ti ti-brand-shopee"></i>
                      <span className="hide-menu">Checkout</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/eccommerce/add-product" className="sidebar-link">
                      <i className="ti ti-file-plus"></i>
                      <span className="hide-menu">Add Product</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link two-column has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <span>
                    <Icon
                      icon="solar:widget-line-duotone"
                      className="ti"
                    ></Icon>
                  </span>
                  <span className="hide-menu">Master</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link to="master/status" className="sidebar-link">
                      <i className="ti ti-list-check"></i>
                      <span className="hide-menu">Status</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/master/tag" className="sidebar-link">
                      <i className="ti ti-list-check"></i>
                      <span className="hide-menu">Tag</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="master/variant" className="sidebar-link">
                      <i className="ti ti-list-check"></i>
                      <span className="hide-menu">Variant</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="master/gender" className="sidebar-link">
                      <i className="ti ti-list-check"></i>
                      <span className="hide-menu">Gender</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="master/category" className="sidebar-link">
                      <i className="ti ti-list-check"></i>
                      <span className="hide-menu">Category</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link two-column has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <span>
                    <Icon
                      icon="solar:widget-line-duotone"
                      className="ti"
                    ></Icon>
                  </span>
                  <span className="hide-menu">UI-Component</span>
                </Link>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link to="component/image-viewer" className="sidebar-link">
                      <i className="ti ti-list-check"></i>
                      <span className="hide-menu">Image Viewer</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/component/rating-star" className="sidebar-link">
                      <i className="ti ti-list-check"></i>
                      <span className="hide-menu">Rating Star</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/component/range-slider" className="sidebar-link">
                      <i className="ti ti-list-check"></i>
                      <span className="hide-menu">range-slider</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <Link to="/profile" className="sidebar-link">
                  <i className="ti ti-user-circle"></i>
                  <span className="hide-menu">User Profile</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/eccommerce/product-list" className="sidebar-link">
                  <i className="ti ti-list-check"></i>
                  <span className="hide-menu">List</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link to="/eccommerce/add-product" className="sidebar-link">
                  <i className="ti ti-file-plus"></i>
                  <span className="hide-menu">Add Product</span>
                </Link>
              </li>
            </ul>
          </nav>
          {/*  */}
        </div>
      </aside>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Shopping Cart
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="container mt-1">
            <div className="card">
              <div>
                {items?.map((product) => {
                  return (
                    <>
                      <div
                        className="row no-gutters"
                        style={{ padding: "10px 0px" }}
                      >
                        {/* <div style={{ padding: "10px 0px" }}> */}
                        <div className="col-md-4">
                          <img
                            src={product?.image[0]}
                            style={{ width: "80px" }}
                            className="card-img"
                            alt="Cute Soft Teddybear"
                          />
                        </div>
                        <div className="col-md-8">
                          <h6 className="card-title">{product?.productName}</h6>
                          <p className="card-text">toys</p>
                          <div className="d-flex align-items-center justify-content-between">
                            <h6 className="mb-0">${product?.basePrice}</h6>
                            <div
                              className="btn-group ml-3"
                              role="group"
                              aria-label="Quantity buttons"
                            >
                              <button
                                type="button"
                                className="btn btn-outline-primary btn-sm"
                                onClick={() =>
                                  dispatch(removeItem(product?._id))
                                }
                              >
                                -
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-primary btn-sm"
                              >
                                <b>{product?.quantity}</b>
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => dispatch(addItem(product))}
                                disabled={product?.quantity === product?.stock}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                      <hr />
                    </>
                  );
                })}
              </div>
              {totalPrice > 0 && (
                <div className="container">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>Total</h6>
                    <h6>{totalPrice}</h6>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-primary btn-lg btn-block mt-3"
                      type="button"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
 
import Logo from "../../assets/images/logos/Logo.png";
import megaDDBG from "../../assets/images/backgrounds/mega-dd-bg.jpg";
import iconFlagEn from "../../assets/images/flag/icon-flag-en.svg";
import iconFlagCn from "../../assets/images/flag/icon-flag-cn.svg";
import iconFlagFr from "../../assets/images/flag/icon-flag-fr.svg";
import iconFlagSa from "../../assets/images/flag/icon-flag-sa.svg";
import user1 from "../../assets/images/profile/user-1.jpg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   function handleColorTheme(e) {
  //     document.documentElement.setAttribute("data-color-theme", e);
  //   }
  return (
    <>
      <header className="topbar">
        <div className="with-vertical">
          <nav className="navbar navbar-expand-lg p-0">
            <ul className="navbar-nav">
              <li className="nav-item d-flex d-xl-none">
                <a
                  className="nav-link nav-icon-hover-bg rounded-circle  sidebartoggler "
                  id="headerCollapse"
                  href="javascript:void(0)"
                >
                  <Icon
                    icon="solar:hamburger-menu-line-duotone"
                    className={"fs-6"}
                  ></Icon>
                </a>
              </li>
              <li className="nav-item d-none d-xl-flex nav-icon-hover-bg rounded-circle">
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <Icon icon="solar:magnifer-linear" className={"fs-6"}></Icon>
                </a>
              </li>
              <li className="nav-item d-none d-lg-flex dropdown nav-icon-hover-bg rounded-circle">
                <div className="hover-dd">
                  <a
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
                  </a>
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
                                  <a
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
                                  </a>
                                  <a
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
                                  </a>
                                  <a
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
                                  </a>
                                  <a
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
                                  </a>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="position-relative">
                                  {/* <a
                                    href="../main/page-user-profile.html"
                                    className="d-flex align-items-center pb-9 position-relative"
                                  > */}
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
                                    {/* </a> */}
                                  </Link>
                                  <a
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
                                  </a>
                                  <a
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
                                  </a>
                                  <a
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
                                  </a>
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
            <a
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
            </a>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <div className="d-flex align-items-center justify-content-between">
                <ul className="navbar-nav flex-row mx-auto ms-lg-auto align-items-center justify-content-center">
                  <li className="nav-item dropdown">
                    <a
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
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link moon dark-layout nav-icon-hover-bg rounded-circle"
                      href="javascript:void(0)"
                    >
                      <Icon
                        icon="solar:moon-line-duotone"
                        className="moon fs-6"
                      ></Icon>
                    </a>
                    <a
                      className="nav-link sun light-layout nav-icon-hover-bg rounded-circle"
                      href="javascript:void(0)"
                      style={{ display: "none" }}
                    >
                      <Icon
                        icon="solar:sun-2-line-duotone"
                        className="sun fs-6"
                      ></Icon>
                    </a>
                  </li>
                  <li className="nav-item d-block d-xl-none">
                    <a
                      className="nav-link nav-icon-hover-bg rounded-circle"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <Icon
                        icon="solar:magnifer-line-duotone"
                        className={"fs-6"}
                      ></Icon>
                    </a>
                  </li>

                  <li className="nav-item dropdown nav-icon-hover-bg rounded-circle">
                    <a
                      className="nav-link position-relative"
                      href="javascript:void(0)"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <Icon
                        icon="solar:bell-bing-line-duotone"
                        className={"fs-6"}
                      ></Icon>
                    </a>
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
                        <a
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
                        </a>
                        <a
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
                        </a>
                        <a
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
                        </a>
                        <a
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
                        </a>
                        <a
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
                        </a>
                        <a
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
                        </a>
                      </div>
                      <div className="py-6 px-7 mb-1">
                        <button className="btn btn-primary w-100">
                          See All Notifications
                        </button>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown nav-icon-hover-bg rounded-circle">
                    <a
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
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <a
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
                        </a>
                        <a
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
                        </a>
                        <a
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
                        </a>
                        <a
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
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="javascript:void(0)"
                      id="drop1"
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center gap-2 lh-base">
                        <img
                          src={user1}
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
                    </a>
                    <div
                      className="dropdown-menu profile-dropdown dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop1"
                    >
                      <div className="position-relative px-4 pt-3 pb-2">
                        <div className="d-flex align-items-center mb-3 pb-3 border-bottom gap-6">
                          <img
                            src={user1}
                            className="rounded-circle"
                            width="56"
                            height="56"
                            alt="matdash-img"
                          />
                          <div>
                            <h5 className="mb-0 fs-12">
                              David McMichael{" "}
                              <span className="text-success fs-11">Pro</span>
                            </h5>
                            <p className="mb-0 text-dark">
                              david@wrappixel.com
                            </p>
                          </div>
                        </div>
                        <div className="message-body">
                          <Link
                            to="/profile"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            {/* <a
                            href="../main/page-user-profile.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          > */}
                            My Profile
                          </Link>
                          <a
                            href="../main/page-pricing.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            My Subscription
                          </a>
                          <a
                            href="../main/app-invoice.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            My Invoice{" "}
                            <span className="badge bg-danger-subtle text-danger rounded ms-8">
                              4
                            </span>
                          </a>
                          <a
                            href="../main/page-account-settings.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            Account Settings
                          </a>
                          <a
                            href="../main/authentication-login2.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            Sign Out
                          </a>
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
                    <a
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
                    </a>
                    <ul
                      aria-expanded="false"
                      className="collapse first-level my-3 ps-3"
                    >
                      <li className="sidebar-item py-2">
                        <a
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
                        </a>
                      </li>
                      <li className="sidebar-item py-2">
                        <a
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
                        </a>
                      </li>
                      <li className="sidebar-item py-2">
                        <a
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
                        </a>
                      </li>
                      <li className="sidebar-item py-2">
                        <a
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
                        </a>
                      </li>
                      <li className="sidebar-item py-2">
                        <Link
                          to="/profile"
                          className="d-flex align-items-center"
                        >
                          {/* <a
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
                        <a
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
                        </a>
                      </li>
                      <li className="sidebar-item py-2">
                        <a
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
                        </a>
                      </li>
                      <li className="sidebar-item py-2">
                        <a
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
                        </a>
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
                <a
                  className="nav-link sidebartoggler nav-icon-hover-bg rounded-circle"
                  id="sidebarCollapse"
                  href="javascript:void(0)"
                >
                  <Icon
                    icon="solar:hamburger-menu-line-duotone"
                    className={"fs-7"}
                  ></Icon>
                </a>
              </li>
              <li className="nav-item d-none d-xl-flex align-items-center">
                <Link to="/" className="text-nowrap nav-link">
                  <img src={Logo} alt="matdash-img" />
                </Link>
              </li>
              <li className="nav-item d-none d-xl-flex align-items-center nav-icon-hover-bg rounded-circle">
                <a
                  className="nav-link"
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <Icon icon="solar:magnifer-linear" className={"fs-6"}></Icon>
                </a>
              </li>
              <li className="nav-item d-none d-lg-flex align-items-center dropdown nav-icon-hover-bg rounded-circle">
                <div className="hover-dd">
                  <a
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
                  </a>
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
                                  <a
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
                                  </a>
                                  <a
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
                                  </a>
                                  <a
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
                                  </a>
                                  <a
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
                                  </a>
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
                                  <a
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
                                  </a>
                                  <a
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
                                  </a>
                                  <a
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
                                  </a>
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
                <img src={Logo} alt="matdash-img" />
              </Link>
            </div>
            <a
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
            </a>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <div className="d-flex align-items-center justify-content-between px-0 px-xl-8">
                <ul className="navbar-nav flex-row mx-auto ms-lg-auto align-items-center justify-content-center">
                  <li className="nav-item dropdown">
                    <a
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
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link nav-icon-hover-bg rounded-circle moon dark-layout"
                      href="javascript:void(0)"
                    >
                      <Icon
                        icon="solar:moon-line-duotone"
                        className="moon fs-6"
                      ></Icon>
                    </a>
                    <a
                      className="nav-link nav-icon-hover-bg rounded-circle sun light-layout"
                      href="javascript:void(0)"
                      style={{ display: "none" }}
                    >
                      <Icon
                        icon="solar:sun-2-line-duotone"
                        className="sun fs-6"
                      ></Icon>
                    </a>
                  </li>
                  <li className="nav-item d-block d-xl-none">
                    <a
                      className="nav-link nav-icon-hover-bg rounded-circle"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <Icon
                        icon="solar:magnifer-line-duotone"
                        className={"fs-6"}
                      ></Icon>
                    </a>
                  </li>

                  <li className="nav-item dropdown nav-icon-hover-bg rounded-circle">
                    <a
                      className="nav-link position-relative"
                      href="javascript:void(0)"
                      id="drop2"
                      aria-expanded="false"
                    >
                      <Icon
                        icon="solar:bell-bing-line-duotone"
                        className={"fs-6"}
                      ></Icon>
                    </a>
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
                        <a
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
                        </a>
                        <a
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
                        </a>
                        <a
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
                        </a>
                        <a
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
                        </a>
                        <a
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
                        </a>
                        <a
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
                        </a>
                      </div>
                      <div className="py-6 px-7 mb-1">
                        <button className="btn btn-primary w-100">
                          See All Notifications
                        </button>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown nav-icon-hover-bg rounded-circle">
                    <a
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
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <a
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
                        </a>
                        <a
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
                        </a>
                        <a
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
                        </a>
                        <a
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
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="javascript:void(0)"
                      id="drop1"
                      aria-expanded="false"
                    >
                      <div className="d-flex align-items-center gap-2 lh-base">
                        <img
                          src={user1}
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
                    </a>
                    <div
                      className="dropdown-menu profile-dropdown dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop1"
                    >
                      <div className="position-relative px-4 pt-3 pb-2">
                        <div className="d-flex align-items-center mb-3 pb-3 border-bottom gap-6">
                          <img
                            src={user1}
                            className="rounded-circle"
                            width="56"
                            height="56"
                            alt="matdash-img"
                          />
                          <div>
                            <h5 className="mb-0 fs-12">
                              David McMichael{" "}
                              <span className="text-success fs-11">Pro</span>
                            </h5>
                            <p className="mb-0 text-dark">
                              david@wrappixel.com
                            </p>
                          </div>
                        </div>
                        <div className="message-body">
                          <Link
                            to="/profile"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            My Profile
                          </Link>
                          <a
                            href="../main/page-pricing.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            My Subscription
                          </a>
                          <a
                            href="../main/app-invoice.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            My Invoice{" "}
                            <span className="badge bg-danger-subtle text-danger rounded ms-8">
                              4
                            </span>
                          </a>
                          <a
                            href="../main/page-account-settings.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            Account Settings
                          </a>
                          <a
                            href="../main/authentication-login2.html"
                            className="p-2 dropdown-item h6 rounded-1"
                          >
                            Sign Out
                          </a>
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
                <a
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
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <Link to="/" className="sidebar-link">
                      <i className="ti ti-aperture"></i>
                      <span className="hide-menu">Dashboard 1</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/index2.html" className="sidebar-link">
                      <i className="ti ti-shopping-cart"></i>
                      <span className="hide-menu">Dashboard 2</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/index3.html" className="sidebar-link">
                      <i className="ti ti-atom"></i>
                      <span className="hide-menu">Dashboard 3</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Apps</span>
              </li>
              <li className="sidebar-item">
                <a
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
                  <span className="hide-menu">Apps</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a
                      href="../main/app-calendar.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-calendar"></i>
                      <span className="hide-menu">Calendar</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/apps-kanban.html" className="sidebar-link">
                      <i className="ti ti-layout-kanban"></i>
                      <span className="hide-menu">Kanban</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/app-chat.html" className="sidebar-link">
                      <i className="ti ti-message-dots"></i>
                      <span className="hide-menu">Chat</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link"
                      href="../main/app-email.html"
                      aria-expanded="false"
                    >
                      <span>
                        <i className="ti ti-mail"></i>
                      </span>
                      <span className="hide-menu">Email</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/app-contact.html" className="sidebar-link">
                      <i className="ti ti-phone"></i>
                      <span className="hide-menu">Contact Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/app-contact2.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-list-details"></i>
                      <span className="hide-menu">Contact List</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/app-notes.html" className="sidebar-link">
                      <i className="ti ti-notes"></i>
                      <span className="hide-menu">Notes</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/app-invoice.html" className="sidebar-link">
                      <i className="ti ti-file-text"></i>
                      <span className="hide-menu">Invoice</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/profile" className="sidebar-link">
                      <i className="ti ti-user-circle"></i>
                      <span className="hide-menu">User Profile</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/blog-posts.html" className="sidebar-link">
                      <i className="ti ti-article"></i>
                      <span className="hide-menu">Posts</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/blog-detail.html" className="sidebar-link">
                      <i className="ti ti-details"></i>
                      <span className="hide-menu">Detail</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <Link to="/eccommerce/shop" className="sidebar-link">
                      <i className="ti ti-shopping-cart"></i>
                      <span className="hide-menu">Shop</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      to="/eccommerce/product-details"
                      className="sidebar-link"
                    >
                      <i className="ti ti-basket"></i>
                      <span className="hide-menu">Shop Detail</span>
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
                  <li className="sidebar-item">
                    <Link
                      to="/eccommerce/edit-product"
                      className="sidebar-link"
                    >
                      <i className="ti ti-file-pencil"></i>
                      <span className="hide-menu">Edit Product</span>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">PAGES</span>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <span>
                    <Icon icon="solar:notes-line-duotone" className="ti"></Icon>
                  </span>
                  <span className="hide-menu">Pages</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="../main/page-faq.html" className="sidebar-link">
                      <i className="ti ti-help"></i>
                      <span className="hide-menu">FAQ</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/page-account-settings.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-user-circle"></i>
                      <span className="hide-menu">Account Setting</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/page-pricing.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-currency-dollar"></i>
                      <span className="hide-menu">Pricing</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/widgets-cards.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-cards"></i>
                      <span className="hide-menu">Card</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/widgets-banners.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-ad"></i>
                      <span className="hide-menu">Banner</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/widgets-charts.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-chart-bar"></i>
                      <span className="hide-menu">Charts</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/starter.html" className="sidebar-link">
                      <i className="ti ti-file"></i>
                      <span className="hide-menu">Starter</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../landingpage/index.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-app-window"></i>
                      <span className="hide-menu">Landing Page</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">UI</span>
              </li>

              <li className="sidebar-item mega-dropdown">
                <a
                  className="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <span className="rounded-3">
                    <Icon
                      icon="solar:archive-line-duotone"
                      className="ti"
                    ></Icon>
                  </span>
                  <span className="hide-menu">UI</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a
                      href="../main/ui-accordian.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Accordian</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/ui-badge.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Badge</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/ui-buttons.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Buttons</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/ui-dropdowns.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Dropdowns</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/ui-modals.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Modals</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/ui-tab.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Tab</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/ui-tooltip-popover.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Tooltip & Popover</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/ui-notification.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Notification</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/ui-progressbar.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Progressbar</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/ui-pagination.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Pagination</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/ui-typography.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Typography</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/ui-bootstrap-ui.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Bootstrap UI</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/ui-breadcrumb.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Breadcrumb</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/ui-offcanvas.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Offcanvas</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/ui-lists.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Lists</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/ui-grid.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Grid</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/ui-carousel.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Carousel</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/ui-scrollspy.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Scrollspy</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/ui-spinner.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Spinner</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/ui-link.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Link</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Forms</span>
              </li>

              <li className="sidebar-item">
                <a
                  className="sidebar-link two-column has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <span className="rounded-3">
                    <Icon
                      icon="solar:folder-line-duotone"
                      className="ti"
                    ></Icon>
                  </span>
                  <span className="hide-menu">Forms</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="../main/form-inputs.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Forms Input</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/form-input-groups.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Input Groups</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/form-input-grid.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Input Grid</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/form-checkbox-radio.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Checkbox & Radios</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/form-bootstrap-switch.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Bootstrap Switch</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/form-select2.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Select2</span>
                    </a>
                  </li>

                  <li className="sidebar-item">
                    <a href="../main/form-basic.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Basic Form</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/form-vertical.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Form Vertical</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/form-horizontal.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Form Horizontal</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/form-actions.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Form Actions</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/form-row-separator.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Row Separator</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/form-bordered.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Form Bordered</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="../main/form-detail.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Form Detail</span>
                    </a>
                  </li>

                  <li className="sidebar-item">
                    <a href="../main/form-wizard.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Form Wizard</span>
                    </a>
                  </li>

                  <li className="sidebar-item">
                    <a
                      href="../main/form-editor-quill.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Quill Editor</span>
                    </a>
                  </li>

                  <li className="sidebar-item">
                    <a
                      href="../main/form-editor-tinymce.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Tinymce Editor</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Tables</span>
              </li>

              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <span className="rounded-3">
                    <Icon
                      icon="solar:tuning-square-2-line-duotone"
                      className="ti"
                    ></Icon>
                  </span>
                  <span className="hide-menu">Tables</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="../main/table-basic.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Basic Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/table-dark-basic.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Dark Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/table-sizing.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Sizing Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/table-layout-coloured.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Coloured Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/table-datatable-basic.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Basic Initialisation</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/table-datatable-api.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">API</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/table-datatable-advanced.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Advanced</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Charts</span>
              </li>

              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <span className="rounded-3">
                    <Icon
                      icon="solar:chart-square-line-duotone"
                      className="ti"
                    ></Icon>
                  </span>
                  <span className="hide-menu">Charts</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a
                      href="../main/chart-apex-line.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Line Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/chart-apex-area.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Area Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/chart-apex-bar.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Bar Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/chart-apex-pie.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Pie Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/chart-apex-radial.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Radial Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="../main/chart-apex-radar.html"
                      className="sidebar-link"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Radar Chart</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Icons</span>
              </li>

              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <span className="rounded-3">
                    <Icon
                      icon="solar:sticker-smile-square-line-duotone"
                      className="ti"
                    ></Icon>
                  </span>
                  <span className="hide-menu">Icons</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link"
                      href="../main/icon-tabler.html"
                      aria-expanded="false"
                    >
                      <span className="rounded-3">
                        <i className="ti ti-circle"></i>
                      </span>
                      <span className="hide-menu">Tabler Icon</span>
                    </a>
                  </li>

                  <li className="sidebar-item">
                    <a
                      className="sidebar-link sidebar-link"
                      href="../main/icon-solar.html"
                      aria-expanded="false"
                    >
                      <span className="rounded-3">
                        <i className="ti ti-circle"></i>
                      </span>
                      <span className="hide-menu">Solar Icon</span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <span className="rounded-3">
                    <Icon
                      icon="solar:airbuds-case-minimalistic-line-duotone"
                      className="ti"
                    ></Icon>
                  </span>
                  <span className="hide-menu">Multi DD</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="../docs/index.html" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Documentation</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Page 1</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="javascript:void(0)"
                      className="sidebar-link has-arrow"
                    >
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Page 2</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="ti ti-circle"></i>
                          <span className="hide-menu">Page 2.1</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="ti ti-circle"></i>
                          <span className="hide-menu">Page 2.2</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="javascript:void(0)" className="sidebar-link">
                          <i className="ti ti-circle"></i>
                          <span className="hide-menu">Page 2.3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="javascript:void(0)" className="sidebar-link">
                      <i className="ti ti-circle"></i>
                      <span className="hide-menu">Page 3</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/*  */}
        </div>
      </aside>
    </>
  );
};

export default Navbar;

import { Icon } from "@iconify/react";
import profilebg from "../../assets/images/backgrounds/profilebg.jpg";
import user1 from "../../assets/images/profile/user-1.jpg";
import { Link, NavLink } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="container-fluid">
      <div className="card card-body py-3">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="d-sm-flex align-items-center justify-space-between">
              <h4 className="mb-4 mb-sm-0 card-title">User Profile</h4>
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
                      User Profile
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="card-body p-0">
          <img src={profilebg} alt="matdash-img" className="img-fluid" />
          <div className="row align-items-center">
            <div className="col-lg-4 order-lg-1 order-2">
              <div className="d-flex align-items-center justify-content-around m-4">
                <div className="text-center">
                  <i className="ti ti-file-description fs-6 d-block mb-2"></i>
                  <h4 className="mb-0 fw-semibold lh-1">938</h4>
                  <p className="mb-0 ">Posts</p>
                </div>
                <div className="text-center">
                  <i className="ti ti-user-circle fs-6 d-block mb-2"></i>
                  <h4 className="mb-0 fw-semibold lh-1">3,586</h4>
                  <p className="mb-0 ">Followers</p>
                </div>
                <div className="text-center">
                  <i className="ti ti-user-check fs-6 d-block mb-2"></i>
                  <h4 className="mb-0 fw-semibold lh-1">2,659</h4>
                  <p className="mb-0 ">Following</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-n3 order-lg-2 order-1">
              <div className="mt-n5">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <div className="d-flex align-items-center justify-content-center round-110">
                    <div className="border border-4 border-white d-flex align-items-center justify-content-center rounded-circle overflow-hidden round-100">
                      <img
                        src={user1}
                        alt="matdash-img"
                        className="w-100 h-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="mb-0">David McMichael</h5>
                  <p className="mb-0">Designer</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 order-last">
              <ul className="list-unstyled d-flex align-items-center justify-content-center justify-content-lg-end my-3 mx-4 pe-4 gap-3">
                <li>
                  <a
                    className="d-flex align-items-center justify-content-center btn btn-primary p-2 fs-4 rounded-circle"
                    href="javascript:void(0)"
                    width="30"
                    height="30"
                  >
                    <i className="ti ti-brand-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-secondary d-flex align-items-center justify-content-center p-2 fs-4 rounded-circle"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-brand-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-danger d-flex align-items-center justify-content-center p-2 fs-4 rounded-circle"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-brand-youtube"></i>
                  </a>
                </li>
                <li>
                  <button className="btn btn-primary text-nowrap">
                    Add To Story
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <ul
            className="nav nav-pills user-profile-tab justify-content-end mt-2 bg-primary-subtle rounded-2 rounded-top-0"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active hstack gap-2 rounded-0 fs-12 py-6"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="true"
              >
                <i className="ti ti-user-circle fs-5"></i>
                <span className="d-none d-md-block">Profile</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link hstack gap-2 rounded-0 fs-12 py-6"
                id="pills-followers-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-followers"
                type="button"
                role="tab"
                aria-controls="pills-followers"
                aria-selected="false"
              >
                <i className="ti ti-heart fs-5"></i>
                <span className="d-none d-md-block">Followers</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link hstack gap-2 rounded-0 fs-12 py-6"
                id="pills-friends-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-friends"
                type="button"
                role="tab"
                aria-controls="pills-friends"
                aria-selected="false"
              >
                <i className="ti ti-user-circle fs-5"></i>
                <span className="d-none d-md-block">Friends</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link hstack gap-2 rounded-0 fs-12 py-6"
                id="pills-gallery-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-gallery"
                type="button"
                role="tab"
                aria-controls="pills-gallery"
                aria-selected="false"
              >
                <i className="ti ti-photo-plus fs-5"></i>
                <span className="d-none d-md-block">Gallery</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabIndex="0"
        >
          <div className="row">
            <div className="col-lg-4">
              <div className="card shadow-none border">
                <div className="card-body">
                  <h4 className="mb-3">Introduction</h4>
                  <p className="card-subtitle">
                    Hello, I am David McMichael. I love making websites and
                    graphics. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                  <div className="vstack gap-3 mt-4">
                    <div className="hstack gap-6">
                      <i className="ti ti-briefcase text-dark fs-6"></i>
                      <h6 className=" mb-0">Sir, P P Institute Of Science</h6>
                    </div>
                    <div className="hstack gap-6">
                      <i className="ti ti-mail text-dark fs-6"></i>
                      <h6 className=" mb-0">david@wrappixel.com</h6>
                    </div>
                    <div className="hstack gap-6">
                      <i className="ti ti-device-desktop text-dark fs-6"></i>
                      <h6 className=" mb-0">www.xyz.com</h6>
                    </div>
                    <div className="hstack gap-6">
                      <i className="ti ti-map-pin text-dark fs-6"></i>
                      <h6 className=" mb-0">Newyork, USA - 100001</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-none border">
                <div className="card-body">
                  <h4 className="fw-semibold mb-3">Photos</h4>
                  <div className="row">
                    <div className="col-4">
                      <img
                        src="../assets/images/profile/user-1.jpg"
                        alt="matdash-img"
                        className="rounded-1 img-fluid mb-9"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="../assets/images/profile/user-2.jpg"
                        alt="matdash-img"
                        className="rounded-1 img-fluid mb-9"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="../assets/images/profile/user-3.jpg"
                        alt="matdash-img"
                        className="rounded-1 img-fluid mb-9"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="../assets/images/profile/user-4.jpg"
                        alt="matdash-img"
                        className="rounded-1 img-fluid mb-9"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="../assets/images/profile/user-5.jpg"
                        alt="matdash-img"
                        className="rounded-1 img-fluid mb-9"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="../assets/images/profile/user-6.jpg"
                        alt="matdash-img"
                        className="rounded-1 img-fluid mb-9"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="../assets/images/profile/user-7.jpg"
                        alt="matdash-img"
                        className="rounded-1 img-fluid mb-6"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="../assets/images/profile/user-8.jpg"
                        alt="matdash-img"
                        className="rounded-1 img-fluid mb-6"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="../assets/images/profile/user-1.jpg"
                        alt="matdash-img"
                        className="rounded-1 img-fluid mb-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card shadow-none border">
                <div className="card-body">
                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control h-140"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    ></textarea>
                    <label htmlFor="floatingTextarea2">
                      Share your thoughts
                    </label>
                  </div>
                  <div className="d-flex align-items-center gap-6 flex-wrap">
                    <a
                      className="d-flex align-items-center round-32 justify-content-center btn btn-primary rounded-circle"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-photo"></i>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="text-dark link-primary pe-3 py-2"
                    >
                      Photo / Video
                    </a>

                    <a
                      className="d-flex align-items-center round-32 justify-content-center btn btn-secondary rounded-circle"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-notebook"></i>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="text-dark link-secondary pe-3 py-2"
                    >
                      Article
                    </a>

                    <button className="btn btn-primary ms-auto">Post</button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body border-bottom">
                  <div className="d-flex align-items-center gap-6 flex-wrap">
                    <img
                      src="../assets/images/profile/user-1.jpg"
                      alt="matdash-img"
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <h6 className="mb-0">David McMichael</h6>
                    <span className="fs-2 hstack gap-2">
                      <span className="round-10 text-bg-light rounded-circle d-inline-block"></span>{" "}
                      15 min ago
                    </span>
                  </div>
                  <p className="text-dark my-3">
                    Nu kek vuzkibsu mooruno ejepogojo uzjon gag fa ezik disan he
                    nah. Wij wo pevhij tumbug rohsa ahpi ujisapse lo vap labkez
                    eddu suk.
                  </p>
                  <img
                    src="../assets/images/products/s1.jpg"
                    alt="matdash-img"
                    height="360"
                    className="rounded-4 w-100 object-fit-cover"
                  />
                  <div className="d-flex align-items-center my-3">
                    <div className="d-flex align-items-center gap-2">
                      <a
                        className="round-32 rounded-circle btn btn-primary p-0 hstack justify-content-center"
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Like"
                      >
                        <i className="ti ti-thumb-up"></i>
                      </a>
                      <span className="text-dark fw-semibold">67</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 ms-4">
                      <a
                        className="round-32 rounded-circle btn btn-secondary p-0 hstack justify-content-center"
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Comment"
                      >
                        <i className="ti ti-message-2"></i>
                      </a>
                      <span className="text-dark fw-semibold">2</span>
                    </div>
                    <a
                      className="text-dark ms-auto d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                      href="javascript:void(0)"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Share"
                    >
                      <i className="ti ti-share"></i>
                    </a>
                  </div>
                  <div className="position-relative">
                    <div className="p-4 rounded-2 text-bg-light mb-3">
                      <div className="d-flex align-items-center gap-6 flex-wrap">
                        <img
                          src="../assets/images/profile/user-3.jpg"
                          alt="matdash-img"
                          className="rounded-circle"
                          width="33"
                          height="33"
                        />
                        <h6 className="mb-0">Deran Mac</h6>
                        <span className="fs-2">
                          <span className="p-1 text-bg-muted rounded-circle d-inline-block"></span>{" "}
                          8 min ago
                        </span>
                      </div>
                      <p className="my-3">
                        Lufo zizrap iwofapsuk pusar luc jodawbac zi op uvezojroj
                        duwage vuhzoc ja vawdud le furhez siva fikavu ineloh.
                        Zot afokoge si mucuve hoikpaf adzuk zileuda falohfek
                        zoije fuka udune lub annajor gazo conis sufur gu.
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center gap-2">
                          <a
                            className="round-32 rounded-circle btn btn-primary p-0 hstack justify-content-center"
                            href="javascript:void(0)"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Like"
                          >
                            <i className="ti ti-thumb-up"></i>
                          </a>
                          <span className="text-dark fw-semibold">55</span>
                        </div>
                        <div className="d-flex align-items-center gap-2 ms-4">
                          <a
                            className="round-32 rounded-circle btn btn-secondary p-0 hstack justify-content-center"
                            href="javascript:void(0)"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Reply"
                          >
                            <i className="ti ti-arrow-back-up"></i>
                          </a>
                          <span className="text-dark fw-semibold">0</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-2 text-bg-light mb-3">
                      <div className="d-flex align-items-center gap-6 flex-wrap">
                        <img
                          src="../assets/images/profile/user-4.jpg"
                          alt="matdash-img"
                          className="rounded-circle"
                          width="33"
                          height="33"
                        />
                        <h6 className="mb-0">Daisy Wilson</h6>
                        <span className="fs-2">
                          <span className="p-1 text-bg-muted rounded-circle d-inline-block"></span>{" "}
                          5 min ago
                        </span>
                      </div>
                      <p className="my-3">
                        Zumankeg ba lah lew ipep tino tugjekoj hosih fazjid
                        wotmila durmuri buf hi sigapolu joit ebmi joge vo.
                        Horemo vogo hat na ejednu sarta afaamraz zi cunidce
                        peroido suvan podene igneve.
                      </p>
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center gap-2">
                          <a
                            className="round-32 rounded-circle btn btn-primary p-0 hstack justify-content-center"
                            href="javascript:void(0)"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Like"
                          >
                            <i className="ti ti-thumb-up"></i>
                          </a>
                          <span className="text-dark fw-semibold">68</span>
                        </div>
                        <div className="d-flex align-items-center gap-2 ms-4">
                          <a
                            className="round-32 rounded-circle btn btn-secondary p-0 hstack justify-content-center"
                            href="javascript:void(0)"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Reply"
                          >
                            <i className="ti ti-arrow-back-up"></i>
                          </a>
                          <span className="text-dark fw-semibold">1</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-2 text-bg-light ms-7">
                      <div className="d-flex align-items-center gap-6 flex-wrap">
                        <img
                          src="../assets/images/profile/user-5.jpg"
                          alt="matdash-img"
                          className="rounded-circle"
                          width="40"
                          height="40"
                        />
                        <h6 className="mb-0">Carry minati</h6>
                        <span className="fs-2">
                          <span className="p-1 text-bg-muted rounded-circle d-inline-block"></span>
                          just now
                        </span>
                      </div>
                      <p className="my-3">
                        Olte ni somvukab ugura ovaobeco hakgoc miha peztajo
                        tawosu udbacas kismakin hi. Dej zetfamu cevufi sokbid
                        bud mun soimeuha pokahram vehurpar keecris pepab voegmud
                        zundafhef hej pe.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-6 flex-wrap p-3 flex-lg-nowrap">
                  <img
                    src="../assets/images/profile/user-1.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="33"
                    height="33"
                  />
                  <input
                    type="text"
                    className="form-control py-8"
                    id="exampleInputtext"
                    aria-describedby="textHelp"
                    placeholder="Comment"
                  />
                  <button className="btn btn-primary">Comment</button>
                </div>
              </div>
              <div className="card">
                <div className="card-body border-bottom">
                  <div className="d-flex align-items-center gap-6 flex-wrap">
                    <img
                      src="../assets/images/profile/user-5.jpg"
                      alt="matdash-img"
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <h6 className="mb-0">Carry Minati</h6>
                    <span className="fs-2">
                      <span className="p-1 text-bg-light rounded-circle d-inline-block"></span>
                      now
                    </span>
                  </div>
                  <p className="text-dark my-3">
                    Pucnus taw set babu lasufot lawdebuw nem ig bopnub notavfe
                    pe ranlu dijsan liwfekaj lo az. Dom giat gu sehiosi bikelu
                    lo eb uwrerej bih woppoawi wijdiola iknem hih suzega gojmev
                    kir rigoj.
                  </p>
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <a
                        className="round-32 rounded-circle btn btn-primary p-0 hstack justify-content-center"
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Like"
                      >
                        <i className="ti ti-thumb-up"></i>
                      </a>
                      <span className="text-dark fw-semibold">1</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 ms-4">
                      <a
                        className="round-32 rounded-circle btn btn-secondary p-0 hstack justify-content-center"
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Comment"
                      >
                        <i className="ti ti-message-2"></i>
                      </a>
                      <span className="text-dark fw-semibold">0</span>
                    </div>
                    <a
                      className="text-dark ms-auto d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                      href="javascript:void(0)"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Share"
                    >
                      <i className="ti ti-share"></i>
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-6 flex-wrap p-3 flex-lg-nowrap">
                  <img
                    src="../assets/images/profile/user-1.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="33"
                    height="33"
                  />
                  <input
                    type="text"
                    className="form-control py-8"
                    id="exampleInputtext1"
                    aria-describedby="textHelp"
                    placeholder="Comment"
                  />
                  <button className="btn btn-primary">Comment</button>
                </div>
              </div>
              <div className="card">
                <div className="card-body border-bottom">
                  <div className="d-flex align-items-center gap-6 flex-wrap">
                    <img
                      src="../assets/images/profile/user-2.jpg"
                      alt="matdash-img"
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <h6 className="mb-0">Genelia Desouza</h6>
                    <span className="fs-2">
                      <span className="p-1 text-bg-light rounded-circle d-inline-block"></span>{" "}
                      15 min ago
                    </span>
                  </div>
                  <p className="text-dark my-3">
                    Faco kiswuoti mucurvi juokomo fobgi aze huweik zazjofefa
                    kuujer talmoc li niczot lohejbo vozev zi huto. Ju tupma
                    uwujate bevolkoh hob munuap lirec zak ja li hotlanu pigtunu.
                  </p>
                  <div className="row">
                    <div className="col-sm-6">
                      <img
                        src="../assets/images/products/s2.jpg"
                        alt="matdash-img"
                        className="img-fluid rounded-4 mb-3 mb-sm-0"
                      />
                    </div>
                    <div className="col-sm-6">
                      <img
                        src="../assets/images/products/s4.jpg"
                        alt="matdash-img"
                        className="img-fluid rounded-4"
                      />
                    </div>
                  </div>
                  <div className="d-flex align-items-center my-3">
                    <div className="d-flex align-items-center gap-2">
                      <a
                        className="text-dark d-flex align-items-center justify-content-center bg-light p-2 fs-4 rounded-circle"
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Like"
                      >
                        <i className="ti ti-thumb-up"></i>
                      </a>
                      <span className="text-dark fw-semibold">320</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 ms-4">
                      <a
                        className="round-32 rounded-circle btn btn-secondary p-0 hstack justify-content-center"
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Comment"
                      >
                        <i className="ti ti-message-2"></i>
                      </a>
                      <span className="text-dark fw-semibold">1</span>
                    </div>
                    <a
                      className="text-dark ms-auto d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                      href="javascript:void(0)"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Share"
                    >
                      <i className="ti ti-share"></i>
                    </a>
                  </div>
                  <div className="p-4 rounded-2 text-bg-light">
                    <div className="d-flex align-items-center gap-6 flex-wrap">
                      <img
                        src="../assets/images/profile/user-3.jpg"
                        alt="matdash-img"
                        className="rounded-circle"
                        width="33"
                        height="33"
                      />
                      <h6 className="mb-0">Ritesh Deshmukh</h6>
                      <span className="fs-2">
                        <span className="p-1 text-bg-muted rounded-circle d-inline-block"></span>{" "}
                        15 min ago
                      </span>
                    </div>
                    <p className="my-3">
                      Hintib cojno riv ze heb cipcep fij wo tufinpu bephekdab
                      infule pajnaji. Jiran goetimip muovo go en gaga zeljomim
                      hozlu lezuvi ehkapod dec bifoom hag dootasac odo luvgit ti
                      ella.
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="d-flex align-items-center gap-2">
                        <a
                          className="round-32 rounded-circle btn btn-primary p-0 hstack justify-content-center"
                          href="javascript:void(0)"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Like"
                        >
                          <i className="ti ti-thumb-up"></i>
                        </a>
                        <span className="text-dark fw-semibold">65</span>
                      </div>
                      <div className="d-flex align-items-center gap-2 ms-4">
                        <a
                          className="round-32 rounded-circle btn btn-secondary p-0 hstack justify-content-center"
                          href="javascript:void(0)"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-title="Reply"
                        >
                          <i className="ti ti-arrow-back-up"></i>
                        </a>
                        <span className="text-dark fw-semibold">0</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-6 flex-wrap p-3 flex-lg-nowrap">
                  <img
                    src="../assets/images/profile/user-1.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="33"
                    height="33"
                  />
                  <input
                    type="text"
                    className="form-control py-8"
                    id="exampleInputtext2"
                    aria-describedby="textHelp"
                    placeholder="Comment"
                  />
                  <button className="btn btn-primary">Comment</button>
                </div>
              </div>
              <div className="card">
                <div className="card-body border-bottom">
                  <div className="d-flex align-items-center gap-6 flex-wrap">
                    <img
                      src="../assets/images/profile/user-1.jpg"
                      alt="matdash-img"
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <h6 className="mb-0">David McMichael</h6>
                    <span className="fs-2">
                      <span className="p-1 text-bg-light rounded-circle d-inline-block"></span>{" "}
                      15 min ago
                    </span>
                  </div>
                  <p className="text-dark my-3">
                    Faco kiswuoti mucurvi juokomo fobgi aze huweik zazjofefa
                    kuujer talmoc li niczot lohejbo vozev zi huto. Ju tupma
                    uwujate bevolkoh hob munuap lirec zak ja li hotlanu pigtunu.
                  </p>
                  <iframe
                    className="rounded-4 border border-2 mb-3 h-300"
                    src="https://www.youtube.com/embed/d1-FRj20WBE"
                    // frameborder="0"
                    width="100%"
                  ></iframe>
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <a
                        className="round-32 rounded-circle btn btn-primary p-0 hstack justify-content-center"
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Like"
                      >
                        <i className="ti ti-thumb-up"></i>
                      </a>
                      <span className="text-dark fw-semibold">129</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 ms-4">
                      <a
                        className="round-32 rounded-circle btn btn-secondary p-0 hstack justify-content-center"
                        href="javascript:void(0)"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Comment"
                      >
                        <i className="ti ti-message-2"></i>
                      </a>
                      <span className="text-dark fw-semibold">0</span>
                    </div>
                    <a
                      className="text-dark ms-auto d-flex align-items-center justify-content-center bg-transparent p-2 fs-4 rounded-circle"
                      href="javascript:void(0)"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title="Share"
                    >
                      <i className="ti ti-share"></i>
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-6 flex-wrap p-3 flex-lg-nowrap">
                  <img
                    src="../assets/images/profile/user-1.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="33"
                    height="33"
                  />
                  <input
                    type="text"
                    className="form-control py-8"
                    id="exampleInputtext3"
                    aria-describedby="textHelp"
                    placeholder="Comment"
                  />
                  <button className="btn btn-primary">Comment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-followers"
          role="tabpanel"
          aria-labelledby="pills-followers-tab"
          tabIndex="0"
        >
          <div className="d-sm-flex align-items-center justify-content-between mt-3 mb-4">
            <h3 className="mb-3 mb-sm-0 fw-semibold d-flex align-items-center">
              Followers{" "}
              <span className="badge text-bg-secondary fs-2 rounded-4 py-1 px-2 ms-2">
                20
              </span>
            </h3>
            <form className="position-relative">
              <input
                type="text"
                className="form-control search-chat py-2 ps-5"
                id="text-srh"
                placeholder="Search Followers"
              />
              <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y text-dark ms-3"></i>
            </form>
          </div>
          <div className="row">
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-1.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Betty Adams</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>Sint
                      Maarten
                    </span>
                  </div>
                  <button className="btn btn-outline-primary py-1 px-2 ms-auto">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-2.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Virginia Wong</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Tunisia
                    </span>
                  </div>
                  <button className="btn btn-outline-primary py-1 px-2 ms-auto">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-3.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Birdie</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Algeria
                    </span>
                  </div>
                  <button className="btn btn-primary py-1 px-2 ms-auto">
                    Followed
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-4.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Steven</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Malaysia
                    </span>
                  </div>
                  <button className="btn btn-primary py-1 px-2 ms-auto">
                    Followed
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-5.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Hannah</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Grenada
                    </span>
                  </div>
                  <button className="btn btn-primary py-1 px-2 ms-auto">
                    Followed
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-6.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Effie Gross</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Azerbaijan
                    </span>
                  </div>
                  <button className="btn btn-outline-primary py-1 px-2 ms-auto">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-7.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Barton</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      French Souther
                    </span>
                  </div>
                  <button className="btn btn-outline-primary py-1 px-2 ms-auto">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-8.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Carolyn</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>Nauru
                    </span>
                  </div>
                  <button className="btn btn-primary py-1 px-2 ms-auto">
                    Followed
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-9.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Elizabeth</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Djibouti
                    </span>
                  </div>
                  <button className="btn btn-primary py-1 px-2 ms-auto">
                    Followed
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-10.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Jon Cohen</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      United States
                    </span>
                  </div>
                  <button className="btn btn-primary py-1 px-2 ms-auto">
                    Followed
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-1.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Hernandez</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Equatorial Guinea
                    </span>
                  </div>
                  <button className="btn btn-outline-primary py-1 px-2 ms-auto">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-2.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Willie</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Solomon Islands
                    </span>
                  </div>
                  <button className="btn btn-primary py-1 px-2 ms-auto">
                    Followed
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-3.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Harvey</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Uruguay
                    </span>
                  </div>
                  <button className="btn btn-primary py-1 px-2 ms-auto">
                    Followed
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-4.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Alice George</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Madagascar
                    </span>
                  </div>
                  <button className="btn btn-outline-primary py-1 px-2 ms-auto">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-5.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Simpson</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Bahrain
                    </span>
                  </div>
                  <button className="btn btn-primary py-1 px-2 ms-auto">
                    Followed
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-6.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Francis Barber</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Colombia
                    </span>
                  </div>
                  <button className="btn btn-outline-primary py-1 px-2 ms-auto">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-7.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Christian</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Maldives
                    </span>
                  </div>
                  <button className="btn btn-primary py-1 px-2 ms-auto">
                    Followed
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-8.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Laura Nelson</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>St.
                      Helena
                    </span>
                  </div>
                  <button className="btn btn-primary py-1 px-2 ms-auto">
                    Followed
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-9.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Blanche</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>South
                      Africa
                    </span>
                  </div>
                  <button className="btn btn-primary py-1 px-2 ms-auto">
                    Followed
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-md-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4 d-flex align-items-center gap-6 flex-wrap">
                  <img
                    src="../assets/images/profile/user-10.jpg"
                    alt="matdash-img"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                  <div>
                    <h5 className="fw-semibold mb-0">Adam</h5>
                    <span className="fs-2 d-flex align-items-center">
                      <i className="ti ti-map-pin text-dark fs-3 me-1"></i>
                      Suriname
                    </span>
                  </div>
                  <button className="btn btn-primary py-1 px-2 ms-auto">
                    Followed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-friends"
          role="tabpanel"
          aria-labelledby="pills-friends-tab"
          tabIndex="0"
        >
          <div className="d-sm-flex align-items-center justify-content-between mt-3 mb-4">
            <h3 className="mb-3 mb-sm-0 fw-semibold d-flex align-items-center">
              Friends{" "}
              <span className="badge text-bg-secondary fs-2 rounded-4 py-1 px-2 ms-2">
                20
              </span>
            </h3>
            <form className="position-relative">
              <input
                type="text"
                className="form-control search-chat py-2 ps-5"
                id="text-srh"
                placeholder="Search Friends"
              />
              <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y text-dark ms-3"></i>
            </form>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-1.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Betty Adams</h5>
                  <span className="text-dark fs-2">Medical Secretary</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-2.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Inez Lyons</h5>
                  <span className="text-dark fs-2">Medical Technician</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-3.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Lydia Bryan</h5>
                  <span className="text-dark fs-2">Preschool Teacher</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-4.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Carolyn Bryant</h5>
                  <span className="text-dark fs-2">Legal Secretary</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-5.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Paul Benson</h5>
                  <span className="text-dark fs-2">Safety Engineer</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-6.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Robert Francis</h5>
                  <span className="text-dark fs-2">Nursing Administrator</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-7.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Billy Rogers</h5>
                  <span className="text-dark fs-2">Legal Secretary</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-8.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Rosetta Brewer</h5>
                  <span className="text-dark fs-2">Comptroller</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-9.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Patrick Knight</h5>
                  <span className="text-dark fs-2">Retail Store Manager</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-10.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Francis Sutton</h5>
                  <span className="text-dark fs-2">Astronomer</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-1.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Bernice Henry</h5>
                  <span className="text-dark fs-2">Security Consultant</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-2.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Estella Garcia</h5>
                  <span className="text-dark fs-2">
                    Lead Software Test Engineer
                  </span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-3.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Norman Moran</h5>
                  <span className="text-dark fs-2">Engineer Technician</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-4.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Jessie Matthews</h5>
                  <span className="text-dark fs-2">Lead Software Engineer</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-5.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Elijah Perez</h5>
                  <span className="text-dark fs-2">
                    Special Education Teacher
                  </span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-6.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Robert Martin</h5>
                  <span className="text-dark fs-2">Transportation Manager</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-7.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Elva Wong</h5>
                  <span className="text-dark fs-2">Logistics Manager</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-8.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Edith Taylor</h5>
                  <span className="text-dark fs-2">Union Representative</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-9.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Violet Jackson</h5>
                  <span className="text-dark fs-2">Agricultural Inspector</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card hover-img">
                <div className="card-body p-4 text-center border-bottom">
                  <img
                    src="../assets/images/profile/user-10.jpg"
                    alt="matdash-img"
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-semibold mb-0">Phoebe Owens</h5>
                  <span className="text-dark fs-2">Safety Engineer</span>
                </div>
                <ul className="px-2 py-2 bg-light list-unstyled d-flex align-items-center justify-content-center mb-0">
                  <li className="position-relative">
                    <a
                      className="text-primary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold"
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-facebook"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-danger d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-instagram"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-info d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-github"></i>
                    </a>
                  </li>
                  <li className="position-relative">
                    <a
                      className="text-secondary d-flex align-items-center justify-content-center p-2 fs-5 rounded-circle fw-semibold "
                      href="javascript:void(0)"
                    >
                      <i className="ti ti-brand-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-gallery"
          role="tabpanel"
          aria-labelledby="pills-gallery-tab"
          tabIndex="0"
        >
          <div className="d-sm-flex align-items-center justify-content-between mt-3 mb-4">
            <h3 className="mb-3 mb-sm-0 fw-semibold d-flex align-items-center">
              Gallery{" "}
              <span className="badge text-bg-secondary fs-2 rounded-4 py-1 px-2 ms-2">
                12
              </span>
            </h3>
            <form className="position-relative">
              <input
                type="text"
                className="form-control search-chat py-2 ps-5"
                id="text-srh"
                placeholder="Search Friends"
              />
              <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y text-dark ms-3"></i>
            </form>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card hover-img overflow-hidden rounded-2">
                <div className="card-body p-0">
                  <img
                    src="../assets/images/products/s1.jpg"
                    alt="matdash-img"
                    height="220"
                    className="w-100 object-fit-cover"
                  />
                  <div className="p-4 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-0">Isuava wakceajo fe.jpg</h6>
                      <span className="text-dark fs-2">Wed, Dec 14, 2023</span>
                    </div>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center p-1"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </a>
                      <ul className="dropdown-menu overflow-hidden">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Isuava wakceajo fe.jpg
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card hover-img overflow-hidden rounded-2">
                <div className="card-body p-0">
                  <img
                    src="../assets/images/products/s2.jpg"
                    alt="matdash-img"
                    height="220"
                    className="w-100 object-fit-cover"
                  />
                  <div className="p-4 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-0">Ip docmowe vemremrif.jpg</h6>
                      <span className="text-dark fs-2">Wed, Dec 14, 2023</span>
                    </div>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center p-1"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </a>
                      <ul className="dropdown-menu overflow-hidden">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Ip docmowe vemremrif.jpg
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card hover-img overflow-hidden rounded-2">
                <div className="card-body p-0">
                  <img
                    src="../assets/images/products/s3.jpg"
                    alt="matdash-img"
                    height="220"
                    className="w-100 object-fit-cover"
                  />
                  <div className="p-4 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-0">Duan cosudos utaku.jpg</h6>
                      <span className="text-dark fs-2">Wed, Dec 14, 2023</span>
                    </div>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center p-1"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </a>
                      <ul className="dropdown-menu overflow-hidden">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Duan cosudos utaku.jpg
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card hover-img overflow-hidden rounded-2">
                <div className="card-body p-0">
                  <img
                    src="../assets/images/products/s4.jpg"
                    alt="matdash-img"
                    height="220"
                    className="w-100 object-fit-cover"
                  />
                  <div className="p-4 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-0">Fu netbuv oggu.jpg</h6>
                      <span className="text-dark fs-2">Wed, Dec 14, 2023</span>
                    </div>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center p-1"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </a>
                      <ul className="dropdown-menu overflow-hidden">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Fu netbuv oggu.jpg
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card hover-img overflow-hidden rounded-2">
                <div className="card-body p-0">
                  <img
                    src="../assets/images/products/s5.jpg"
                    alt="matdash-img"
                    height="220"
                    className="w-100 object-fit-cover"
                  />
                  <div className="p-4 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-0">Di sekog do.jpg</h6>
                      <span className="text-dark fs-2">Wed, Dec 14, 2023</span>
                    </div>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center p-1"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </a>
                      <ul className="dropdown-menu overflow-hidden">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Di sekog do.jpg
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card hover-img overflow-hidden rounded-2">
                <div className="card-body p-0">
                  <img
                    src="../assets/images/products/s6.jpg"
                    alt="matdash-img"
                    height="220"
                    className="w-100 object-fit-cover"
                  />
                  <div className="p-4 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-0">Lo jogu camhiisi.jpg</h6>
                      <span className="text-dark fs-2">Thu, Dec 15, 2023</span>
                    </div>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center p-1"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </a>
                      <ul className="dropdown-menu overflow-hidden">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Lo jogu camhiisi.jpg
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card hover-img overflow-hidden rounded-2">
                <div className="card-body p-0">
                  <img
                    src="../assets/images/products/s7.jpg"
                    alt="matdash-img"
                    height="220"
                    className="w-100 object-fit-cover"
                  />
                  <div className="p-4 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-0">Orewac huosazud robuf.jpg</h6>
                      <span className="text-dark fs-2">Fri, Dec 16, 2023</span>
                    </div>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center p-1"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </a>
                      <ul className="dropdown-menu overflow-hidden">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Orewac huosazud robuf.jpg
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card hover-img overflow-hidden rounded-2">
                <div className="card-body p-0">
                  <img
                    src="../assets/images/products/s8.jpg"
                    alt="matdash-img"
                    height="220"
                    className="w-100 object-fit-cover"
                  />
                  <div className="p-4 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-0">Nira biolaizo tuzi.jpg</h6>
                      <span className="text-dark fs-2">Sat, Dec 17, 2023</span>
                    </div>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center p-1"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </a>
                      <ul className="dropdown-menu overflow-hidden">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Nira biolaizo tuzi.jpg
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card hover-img overflow-hidden rounded-2">
                <div className="card-body p-0">
                  <img
                    src="../assets/images/products/s9.jpg"
                    alt="matdash-img"
                    height="220"
                    className="w-100 object-fit-cover"
                  />
                  <div className="p-4 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-0">Peri metu ejvu.jpg</h6>
                      <span className="text-dark fs-2">Sun, Dec 18, 2023</span>
                    </div>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center p-1"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </a>
                      <ul className="dropdown-menu overflow-hidden">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Peri metu ejvu.jpg
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card hover-img overflow-hidden rounded-2">
                <div className="card-body p-0">
                  <img
                    src="../assets/images/products/s10.jpg"
                    alt="matdash-img"
                    height="220"
                    className="w-100 object-fit-cover"
                  />
                  <div className="p-4 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-0">Vurnohot tajraje isusufuj.jpg</h6>
                      <span className="text-dark fs-2">Mon, Dec 19, 2023</span>
                    </div>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center p-1"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </a>
                      <ul className="dropdown-menu overflow-hidden">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Vurnohot tajraje isusufuj.jpg
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card hover-img overflow-hidden rounded-2">
                <div className="card-body p-0">
                  <img
                    src="../assets/images/products/s11.jpg"
                    alt="matdash-img"
                    height="220"
                    className="w-100 object-fit-cover"
                  />
                  <div className="p-4 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-0">Juc oz ma.jpg</h6>
                      <span className="text-dark fs-2">Tue, Dec 20, 2023</span>
                    </div>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center p-1"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </a>
                      <ul className="dropdown-menu overflow-hidden">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Juc oz ma.jpg
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card hover-img overflow-hidden rounded-2">
                <div className="card-body p-0">
                  <img
                    src="../assets/images/products/s12.jpg"
                    alt="matdash-img"
                    height="220"
                    className="w-100 object-fit-cover"
                  />
                  <div className="p-4 d-flex align-items-center justify-content-between">
                    <div>
                      <h6 className="mb-0">Povipvez marjelliz zuuva.jpg</h6>
                      <span className="text-dark fs-2">Wed, Dec 21, 2023</span>
                    </div>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center p-1"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical"></i>
                      </a>
                      <ul className="dropdown-menu overflow-hidden">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Povipvez marjelliz zuuva.jpg
                          </a>
                        </li>
                      </ul>
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
};

export default UserProfile;

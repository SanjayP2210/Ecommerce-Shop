import { useState, useEffect, useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import apiService, { apiRequest } from "../../service/apiService";
import OwlCarouselComponent from "../../components/OwlCarousel/OwlCarousel";
import RatingComponent from "../../components/Rating/RatingComponent";
import { toast } from "react-toastify";
import ReactEditor from "../../components/Editor/TextEditor";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const [productDetail, setProductDetail] = useState({});
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [quality, setQuality] = useState(1);
  const  reviewTabButtonRef = useRef();
   // const [reviewData, setReviewData] = useState({
  //   numOfReviews,
  //   ratings,
  //   reviews,
  // });
  // console.log("productDetail", productDetail);
  const {
    createdAt,
    modifiedAt,
    _id,
    productName,
    taxClass,
    vatAmount,
    basePrice,
    categories,
    tags,
    variants,
    description,
    thumbnail,
    images,
    discountType,
    status,
    numOfReviews,
    ratings,
    reviews,
  } = productDetail;
  const colors = variants
    ?.filter((x) => x.variantType?.value === "color")
    ?.map((x) => x.variantValue);
  const reviewCloseBtnRef = useRef(null);
const {
  isAdmin,
  isLoggedIn,
  loginUserData: user,
} = useSelector((state) => state.auth);
  const handleQuantity = (type) => {
    if (type === "+") {
      setQuality(quality + 1);
    } else {
      setQuality(quality === 1 ? 1 : quality - 1);
    }
  };
  const fetchProductDetails = async () => {
    try {
      setIsLoading(true);
      const response = await apiService.getRequest(`product/${productId}`);
      if (response) {
        setProductDetail(response.productData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error fetching product details", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (productId) {
      fetchProductDetails();
      // fetchReview();
    }
  }, [productId]);

  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    comment: "",
    productId: productId,
    user: user?._id,
  });


  const fetchReview = async() => {
    try {
      const response = await apiService.getRequest(`product/review/${productId}`);
      if (response.isError) {
        toast.error("Error adding new review",response.message);
      } else {
        setReviewForm({
          ...reviewForm,
          rating: 0,
          comment: "",
        });
        const { reviews } = response;

        setProductDetail({
          ...productDetail,
          reviews,
          numOfReviews: response.numOfReviews,
          ratings: response.ratings,
        });
      }
    } catch (error) {
      toast.error("Error adding new review",error)
    }
  }
  // console.log("reviewForm", reviewForm);

  const addNewReview = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      const formKeys = Object.keys(reviewForm);
      formKeys.forEach((key) => {
        const keyValue = reviewForm[key];
        formData.append(key, keyValue);
      });
      const response = await apiService.putRequest("product/review", formData);
      if (!response?.isError) {
        toast.success("review added successfully");
        reviewCloseBtnRef.current.click();
        fetchReview();
      } else {
        toast.error("Error adding new review",);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error adding new review");
    }
  };

  return (
    <>
      <Loader visible={isLoading} />
      <div className="container-fluid">
        <div className="card card-body py-3">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-sm-flex align-items-center justify-space-between">
                <h4 className="mb-4 mb-sm-0 card-title">Product Detail</h4>
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
                        Product Detail
                      </span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="shop-detail">
          <div className="card">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-lg-6">
                  <OwlCarouselComponent images={images || []} />
                </div>
                <div className="col-lg-6">
                  <div className="shop-content">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="badge text-bg-success fs-2 fw-semibold">
                        {status?.label || ""}
                      </span>
                      <span className="fs-2">
                        {categories?.map((categ, index1) => {
                          return (
                            <p className="mb-0" key={index1}>
                              {index1 + 1 != categories?.length
                                ? `${categ?.label} ,`
                                : categ?.label}
                            </p>
                          );
                        })}
                      </span>
                    </div>
                    <h4>{productName || ""}</h4>
                    {/* <p className="mb-3">{description}</p> */}
                    <h4 className="fw-semibold mb-3">
                      <del className="fs-5 text-muted">{basePrice}</del>{" "}
                      {basePrice}
                    </h4>
                    <div className="d-flex align-items-center gap-8 pb-4 border-bottom">
                      {/* <ul className="list-unstyled d-flex align-items-center mb-0">
                      <li>
                        <a className="me-1" href="javascript:void(0)">
                          <i className="ti ti-star text-warning fs-4"></i>
                        </a>
                      </li>
                      <li>
                        <a className="me-1" href="javascript:void(0)">
                          <i className="ti ti-star text-warning fs-4"></i>
                        </a>
                      </li>
                      <li>
                        <a className="me-1" href="javascript:void(0)">
                          <i className="ti ti-star text-warning fs-4"></i>
                        </a>
                      </li>
                      <li>
                        <a className="me-1" href="javascript:void(0)">
                          <i className="ti ti-star text-warning fs-4"></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="ti ti-star text-warning fs-4"></i>
                        </a>
                      </li>
                    </ul> */}
                      <RatingComponent rating={ratings} readOnly={true} />
                      <a
                        href="javascript:void(0)"
                        onClick={(e) => {
                          e.preventDefault();
                          reviewTabButtonRef?.current?.click();
                          reviewTabButtonRef.current.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        ({numOfReviews} Reviews)
                      </a>
                    </div>
                    <div className="d-flex align-items-center gap-8 py-7">
                      <h6 className="mb-0 fs-4 fw-semibold">Colors:</h6>
                      {colors?.map((color, index) => {
                        return (
                          <>
                            <a
                              className="rounded-circle d-block p-6"
                              style={{ background: color }}
                              href="javascript:void(0)"
                            ></a>
                          </>
                        );
                      })}
                    </div>
                    <div className="d-flex align-items-center gap-7 pb-7 mb-7 border-bottom">
                      <h6 className="mb-0 fs-4 fw-semibold">QTY:</h6>
                      <div className="input-group input-group-sm rounded">
                        <button
                          className="btn minus min-width-40 py-0 border-end border-muted fs-5 border-end-0 text-muted"
                          type="button"
                          id="add1"
                          disabled={quality === 1}
                          onClick={(e) => {
                            e.preventDefault();
                            handleQuantity("-");
                          }}
                        >
                          <i className="ti ti-minus"></i>
                        </button>
                        <input
                          type="text"
                          className="min-width-40 flex-grow-0 border border-muted text-muted fs-4 fw-semibold form-control text-center qty"
                          placeholder=""
                          aria-label="Example text with button addon"
                          aria-describedby="add1"
                          value={quality}
                        />
                        <button
                          className="btn min-width-40 py-0 border border-muted fs-5 border-start-0 text-muted add"
                          type="button"
                          id="addo2"
                          disabled={quality === productDetail?.stock}
                          onClick={(e) => {
                            e.preventDefault();
                            handleQuantity("+");
                          }}
                        >
                          <i className="ti ti-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="d-sm-flex align-items-center gap-6 pt-8 mb-7">
                      <a
                        href="javascript:void(0)"
                        className="btn d-block btn-primary px-5 py-8 mb-6 mb-sm-0"
                      >
                        Buy Now
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn d-block btn-danger px-7 py-8"
                      >
                        Add to Cart
                      </a>
                    </div>
                    <p className="mb-0">Dispatched in 2-3 weeks</p>
                    <a href="javascript:void(0)">
                      Why the longer time for delivery?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body p-4">
              <ul
                className="nav nav-pills user-profile-tab border-bottom"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link position-relative rounded-0 active d-flex align-items-center justify-content-center bg-transparent fs-3 py-6"
                    id="pills-description-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-description"
                    type="button"
                    role="tab"
                    aria-controls="pills-description"
                    aria-selected="true"
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-6"
                    id="pills-reviews-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-reviews"
                    type="button"
                    role="tab"
                    aria-controls="pills-reviews"
                    aria-selected="false"
                    ref={reviewTabButtonRef}
                  >
                    Reviews
                  </button>
                </li>
              </ul>
              <div className="tab-content pt-4" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-description"
                  role="tabpanel"
                  aria-labelledby="pills-description-tab"
                  tabIndex="0"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></div>
                <div
                  className="tab-pane fade"
                  id="pills-reviews"
                  role="tabpanel"
                  aria-labelledby="pills-reviews-tab"
                  tabIndex="0"
                >
                  <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                      <div className="card shadow-none border w-100 mb-7 mb-lg-0">
                        <div className="card-body text-center p-4 d-flex flex-column justify-content-center">
                          <h6 className="mb-3">Average Rating</h6>
                          <h2 className="text-primary mb-3 fw-semibold fs-9">
                            {ratings || 0}/5
                          </h2>
                          <div className="text-center d-flex justify-content-center">
                            <RatingComponent rating={ratings} readOnly={true} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-stretch">
                      <div className="card shadow-none border w-100 mb-7 mb-lg-0">
                        <div className="card-body p-4 d-flex flex-column justify-content-center">
                          <div className="d-flex align-items-center gap-9 mb-3">
                            <span className="flex-shrink-0 fs-2">1 Stars</span>
                            <div className="progress bg-primary-subtle w-100 h-4">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="45"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                  width: `${
                                    reviews?.filter(
                                      (x) => x.rating > 1 && x.rating < 2
                                    )?.length
                                  }%`,
                                }}
                              ></div>
                            </div>
                            <h6 className="mb-0">
                              (
                              {
                                reviews?.filter(
                                  (x) => x.rating > 1 && x.rating < 2
                                )?.length
                              }
                              )
                            </h6>
                          </div>
                          <div className="d-flex align-items-center gap-9 mb-3">
                            <span className="flex-shrink-0 fs-2">2 Stars</span>
                            <div className="progress bg-primary-subtle w-100 h-4">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                  width: `${
                                    reviews?.filter(
                                      (x) => x.rating > 2 && x.rating < 3
                                    )?.length
                                  }%`,
                                }}
                              ></div>
                            </div>
                            <h6 className="mb-0">
                              (
                              {
                                reviews?.filter(
                                  (x) => x.rating > 2 && x.rating < 3
                                )?.length
                              }
                              )
                            </h6>
                          </div>
                          <div className="d-flex align-items-center gap-9 mb-3">
                            <span className="flex-shrink-0 fs-2">3 Stars</span>
                            <div className="progress bg-primary-subtle w-100 h-4">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                  width: `${
                                    reviews?.filter(
                                      (x) => x.rating > 3 && x.rating < 4
                                    )?.length
                                  }%`,
                                }}
                              ></div>
                            </div>
                            <h6 className="mb-0">
                              (
                              {
                                reviews?.filter(
                                  (x) => x.rating > 3 && x.rating < 4
                                )?.length
                              }
                              )
                            </h6>
                          </div>
                          <div className="d-flex align-items-center gap-9 mb-3">
                            <span className="flex-shrink-0 fs-2">4 Stars</span>
                            <div className="progress bg-primary-subtle w-100 h-4">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="80"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                  width: `${
                                    reviews?.filter(
                                      (x) => x.rating > 4 && x.rating < 5
                                    )?.length
                                  }%`,
                                }}
                              ></div>
                            </div>
                            <h6 className="mb-0">
                              (
                              {
                                reviews?.filter(
                                  (x) => x.rating > 4 && x.rating < 5
                                )?.length
                              }
                              )
                            </h6>
                          </div>
                          <div className="d-flex align-items-center gap-9">
                            <span className="flex-shrink-0 fs-2">5 Stars</span>
                            <div className="progress bg-primary-subtle w-100 h-4">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="12"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{
                                  width: `${
                                    reviews?.filter((x) => x.rating === 5)
                                      ?.length
                                  }%`,
                                }}
                              ></div>
                            </div>
                            <h6 className="mb-0">
                              ({reviews?.filter((x) => x.rating === 5)?.length})
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-stretch">
                      <div className="card shadow-none border w-100 mb-7 mb-lg-0">
                        <div className="card-body p-4 d-flex flex-column justify-content-center">
                          <button
                            type="button"
                            className="btn btn-outline-primary d-flex align-items-center gap-2 mx-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#review-modal"
                          >
                            <i className="ti ti-pencil fs-7"></i>Write an Review
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 d-flex align-items-center justify-content-center mt-4">
                      {/* <div className="card shadow-none border w-100 mb-7 mb-lg-0">
                      <div className="card-body p-4 d-flex flex-column justify-content-center">
                        {reviews && reviews[0] ? (
                          <div className="row">
                            <h3 className="justify-content-center text-center">
                              Reviews
                            </h3>
                            {reviews &&
                              reviews.map((review) => (
                                <ReviewCard key={review._id} review={review} />
                              ))}
                          </div>
                        ) : (
                          <p className="noReviews">No Reviews Yet</p>
                        )}
                      </div>
                    </div> */}
                      <ReviewCard reviews={reviews} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="related-products pt-7">
            <h4 className="mb-3 fw-semibold">Related Products</h4>
            <div className="row">
              <div className="col-sm-6 col-xxl-3">
                <div className="card overflow-hidden rounded-2">
                  <div className="position-relative">
                    <a
                      href="javascript:void(0)"
                      className="hover-img d-block overflow-hidden"
                    >
                      <img
                        src="../assets/images/products/s2.jpg"
                        className="card-img-top rounded-0"
                        alt="matdash-img"
                      />
                    </a>
                  </div>
                  <div className="card-body pt-3 p-4">
                    <h6 className="fw-semibold fs-4">Body Lotion</h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-semibold fs-4 mb-0">
                        $89{" "}
                        <span className="ms-2 fw-normal text-muted fs-3">
                          <del>$99</del>
                        </span>
                      </h6>
                      <ul className="list-unstyled d-flex align-items-center mb-0">
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xxl-3">
                <div className="card overflow-hidden rounded-2">
                  <div className="position-relative">
                    <a
                      href="javascript:void(0)"
                      className="hover-img d-block overflow-hidden"
                    >
                      <img
                        src="../assets/images/products/s4.jpg"
                        className="card-img-top rounded-0"
                        alt="matdash-img"
                      />
                    </a>
                  </div>
                  <div className="card-body pt-3 p-4">
                    <h6 className="fw-semibold fs-4">Glossy Solution</h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-semibold fs-4 mb-0">
                        $50{" "}
                        <span className="ms-2 fw-normal text-muted fs-3">
                          <del>$65</del>
                        </span>
                      </h6>
                      <ul className="list-unstyled d-flex align-items-center mb-0">
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xxl-3">
                <div className="card overflow-hidden rounded-2">
                  <div className="position-relative">
                    <a
                      href="javascript:void(0)"
                      className="hover-img d-block overflow-hidden"
                    >
                      <img
                        src="../assets/images/products/s5.jpg"
                        className="card-img-top rounded-0"
                        alt="matdash-img"
                      />
                    </a>
                  </div>
                  <div className="card-body pt-3 p-4">
                    <h6 className="fw-semibold fs-4">Derma-E</h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-semibold fs-4 mb-0">
                        $650{" "}
                        <span className="ms-2 fw-normal text-muted fs-3">
                          <del>$900</del>
                        </span>
                      </h6>
                      <ul className="list-unstyled d-flex align-items-center mb-0">
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xxl-3">
                <div className="card overflow-hidden rounded-2">
                  <div className="position-relative">
                    <a
                      href="javascript:void(0)"
                      className="hover-img d-block overflow-hidden"
                    >
                      <img
                        src="../assets/images/products/s6.jpg"
                        className="card-img-top rounded-0"
                        alt="matdash-img"
                      />
                    </a>
                  </div>
                  <div className="card-body pt-3 p-4">
                    <h6 className="fw-semibold fs-4">SockSoho</h6>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-semibold fs-4 mb-0">
                        $25{" "}
                        <span className="ms-2 fw-normal text-muted fs-3">
                          <del>$31</del>
                        </span>
                      </h6>
                      <ul className="list-unstyled d-flex align-items-center mb-0">
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a className="me-1" href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i className="ti ti-star text-warning"></i>
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
        <div
          id="review-modal"
          className="modal fade"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable modal-dialog modal-dialog-centered">
            <div className="modal-content modal-filled">
              <div className="modal-header modal-colored-header bg-primary text-white">
                <h4
                  className="modal-title text-white"
                  id="info-header-modalLabel"
                >
                  Add Review
                </h4>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-4">
                      <RatingComponent
                        setRating={(value) => {
                          setReviewForm({
                            ...reviewForm,
                            rating: value,
                          });
                        }}
                        rating={reviewForm?.rating}
                      />
                    </div>
                    <div className="mb-4">
                      <div>
                        <label className="form-label">Description</label>
                        <textarea
                          className="form-control"
                          cols="20"
                          rows="5"
                          style={{ padding: "15px" }}
                          onChange={(e) => {
                            setReviewForm({
                              ...reviewForm,
                              comment: e.target?.value,
                            });
                          }}
                          value={reviewForm?.comment}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <AddReview setNewCategories={setNewCategories} /> */}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light"
                  data-bs-dismiss="modal"
                  ref={reviewCloseBtnRef}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={addNewReview}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import apiService from "../../../service/apiService";
import OwlCarouselComponent from "../../../components/OwlCarousel/OwlCarousel";
import RatingComponent from "../../../components/Rating/RatingComponent";
import { Slide, toast } from "react-toastify";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";
import Loader from "../../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import RelatedProducts from "./RelatedProducts";
import RatingCard from "./RatingCard";
import { addToCart, resetCartState } from "../../../reducers/cartReducer";
import { addToCartInfoToast } from "../../../constants/utilities";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState({});
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [quality, setQuality] = useState(1);
  const [reviewList, setReviewList] = useState([]);
  const [isUserReviewed, setIsUserReviewed] = useState(false);
  const [isBuyNowClicked, setIsBuyNowClicked] = useState(false);
  const reviewTabButtonRef = useRef();
  const addReviewBtn = useRef();
  const productDetailsRef = useRef();
  const dispatch = useDispatch();
  const { cartItems, isCartUpdated } = useSelector((state) => state.cart);
// Sample Data
  //   {
//   "_id": "66a00817f203002097c07ba5",
//   "productName": "Android  tv",
//   "description": "<h1>smart tv</h1>",
//   "stock": 2,
//   "ratings": 5,
//   "basePrice": 7550,
//   "createdAt": "2024-07-23T19:44:22.000Z",
//   "updatedPrice": 3775,
//   "status": [
//     "In Stock"
//   ],
//   "image": [
//     "https://res.cloudinary.com/dcwyk4buy/image/upload/v1721819741/swmef7vvis1zifhhx8q2.jpg"
//   ],
//   "categories": [
//     "Toy",
//     "clothes"
//   ]
// }
  const {
    _id = "",
    productName = "",
    basePrice = "",
    updatedPrice = "",
    categories = "",
    variants = [],
    description="",
    images = [],
    status = "",
    numOfReviews = 0,
    ratings = 0,
    reviews = [],
  } = productDetail;
  console.log("productDetail",productDetail);
  const colors = variants?.value
    ? [variants?.value]
    : variants?.map((x) => x.value);
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
  const fetchProductDetails = async (productId) => {
    try {
      setIsLoading(true);
      const response = await apiService.getRequest(
        `product/get-single-product/${productId}`
      );
      if (response?.isError) { 
        setIsLoading(false);
        toast.error(response?.message);
      }else{
        setProductDetail(response.productData);
        setIsLoading(false);
        fetchReview();
      }
    } catch (error) {
      console.log("error fetching product details", error);
      toast.error(error?.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductDetails(productId);
    }
  }, [productId]);

  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    comment: "",
    productId: productId,
    userId: user?._id,
  });

  useEffect(() => {
    if (reviewList?.length > 0 && productDetail?.productName) {
      const { productDetails } = reviewList[0];
      const { ratings, numOfReviews } = productDetails;
      setProductDetail({
        ...productDetail,
        numOfReviews,
        ratings,
      });
      const userReviewed = reviewList.filter(
        (rev) => rev.userDetails?._id === user?._id
      );
      setIsUserReviewed(userReviewed);
    }
  }, [reviewList]);

  const handleAddToCart = (product) => {
     if (!isLoggedIn) {
       navigate("/auth/login");
       return;
     }
    let limitExist = false;
    if (cartItems && cartItems?.length > 0) {
      const isExist = cartItems.find(
        (item) => item.productId.toString() === product._id
      );
      if (isExist?.productId) {
        limitExist = isExist?.quantity === isExist?.stock;
      }
    }
    if (limitExist) return;
    const formData = {
      productId: product._id,
      quantity: 1,
      price: product?.updatedPrice,
      productName: product?.productName,
      image: product?.thumbnail?.[0]?.url,
      stock: product?.stock,
      updatedPrice: product?.updatedPrice,
    };
    dispatch(addToCart(formData));
  };

  const fetchReview = async () => {
    try {
      const response = await apiService.getRequest(
        `review/product/${productId}`
      );
      if (response.isError) {
        toast.error("Error fetching review", response.message);
      } else {
        setReviewForm({
          ...reviewForm,
          rating: 0,
          comment: "",
        });
        const { reviews } = response;
        setReviewList(reviews);
         // eslint-disable-next-line no-undef
        $(window).scrollTop({ behavior: "smooth" });
      }
    } catch (error) {
      toast.error("Error adding new review", error);
    }
  };

  const addNewReview = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      const formKeys = Object.keys(reviewForm);
      formKeys.forEach((key) => {
        const keyValue = reviewForm[key];
        formData.append(key, keyValue);
      });
      const response = await apiService.postRequest("review", formData);
      if (response?.isError) {
        toast.error("Error adding new review", response?.isError);
      } else {
        toast.success("review added successfully");
        reviewCloseBtnRef.current.click();
        fetchReview();
      }
    } catch (error) {
      console.error(error);
      toast.error("Error adding new review");
    }
  };

  const handleDeleteReview = async (reviewId) => {
    const response = await apiService.deleteRequest(`review/${reviewId}`, {
      productId: productId,
    });
    if (response?.isError) {
      toast.error("Error adding new review", response?.isError);
    } else {
      fetchReview();
    }
  };

  useEffect(() => {
    if (isCartUpdated) {
      if (isBuyNowClicked) {
        navigate("/eccommerce/checkout-product");
        setIsBuyNowClicked(false);
        return;
      }
      dispatch(resetCartState());
      addToCartInfoToast();
    }
  }, [isCartUpdated]);

  return (
    <>
      <Loader visible={isLoading} />
      <div className="container-fluid">
        <div className="card card-body py-3">
          <div className="row align-items-center">
            <div className="col-12" ref={productDetailsRef}>
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
                      {status && (
                        <span className="badge text-bg-success fs-2 fw-semibold">
                          {status}
                        </span>
                      )}
                      {categories && (
                        <span className="fs-2">
                          <p className="mb-0">{categories}</p>
                        </span>
                      )}
                    </div>
                    <h4>{productName || ""}</h4>
                    <h4 className="fw-semibold mb-3">
                      {updatedPrice ? updatedPrice : basePrice}{" "}
                      {updatedPrice && (
                        <span className="ms-2 fw-normal text-muted fs-3">
                          <del className="fs-5 text-muted">{basePrice}</del>
                        </span>
                      )}
                    </h4>
                    <div className="d-flex align-items-center gap-8 pb-4 border-bottom">
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
                        (
                        {numOfReviews > 1
                          ? `${numOfReviews} Reviews`
                          : `${numOfReviews} Review`}
                        )
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
                          className="btn minus min-width-40 py-0 border-end border-muted fs-5 border-end-0"
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
                          readOnly={true}
                          type="text"
                          className="min-width-40 flex-grow-0 border border-muted fs-4 fw-semibold form-control text-center qty"
                          placeholder=""
                          aria-label="Example text with button addon"
                          aria-describedby="add1"
                          value={quality}
                        />
                        <button
                          className="btn min-width-40 py-0 border border-muted fs-5 border-start-0 add"
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
                        onClick={(e) => {
                          e.preventDefault();
                          setIsBuyNowClicked(true);
                          handleAddToCart(productDetail);
                        }}
                      >
                        Buy Now
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn d-block btn-danger px-7 py-8"
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(productDetail);
                        }}
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
                      <RatingCard reviews={reviewList} />
                    </div>
                    <div className="col-lg-4 d-flex align-items-stretch">
                      <div className="card shadow-none border w-100 mb-7 mb-lg-0">
                        <div className="card-body p-4 d-flex flex-column justify-content-center">
                          <button
                            type="button"
                            className="btn btn-outline-primary d-flex align-items-center gap-2 mx-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#review-modal"
                            ref={addReviewBtn}
                            onClick={(e) => {
                              e.preventDefault();
                               if (!isLoggedIn) {
                                 navigate("/auth/login");
                                 return;
                               }
                              const { rating, comment } = isUserReviewed[0];
                              setReviewForm({
                                rating: rating,
                                comment: comment,
                                productId: productId,
                                userId: user?._id,
                              });
                            }}
                          >
                            <i className="ti ti-pencil fs-7"></i>
                            {isUserReviewed?.length > 0 ? "Edit" : "Write"} an
                            Review
                          </button>
                        </div>
                      </div>
                    </div>
                    {reviewList && reviewList?.length > 0 && 
                    <div className="col-lg-12 d-flex align-items-center justify-content-center mt-4">
                      <ReviewCard
                        reviews={reviewList}
                        userId={user?._id}
                        deleteReview={handleDeleteReview}
                        editReview={(review) => {
                          setReviewForm({
                            rating: review.rating,
                            comment: review.comment,
                            productId: productId,
                            userId: user?._id,
                          });
                          addReviewBtn.current.click();
                        }}
                      />
                    </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RelatedProducts productId={productId} />
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
                  disabled={!(reviewForm?.comment && reviewForm?.rating)}
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

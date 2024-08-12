import { useCallback, useEffect, useRef, useState } from "react";
import apiService from "../../../service/apiService";
import { Slide, toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import RatingComponent from "../../../components/Rating/RatingComponent";
import { debounce } from "lodash";
import Loader from "../../../components/Loader/Loader";
import "../index.css";
import PriceSliderComponent from "../../../components/RangeSlider/PriceSlider";
import PriceSortBy from "./PriceSortBy";
import CategoryFilter from "./CategoryFilter";
import Select2 from "../../../components/Select2/Select2";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, resetCartState } from "../../../reducers/cartReducer";
import ColorSelector from "./ColorSelector";
import { addToCartInfoToast } from "../../../constants/utilities";

const Shop = () => {
  const [productList, setProductList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [isProductLoaded, setIsProductLoaded] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const { cartItems, isCartUpdated } = useSelector((state) => state.cart);
  const {
    isAdmin,
    isLoggedIn,
    loginUserData: user,
  } = useSelector((state) => state.auth);
  console.log("productList", productList);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [limit, setLimit] = useState(50);
  const [category, setCategory] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isProductDeleted, setIsProductDeleted] = useState(false);
  const rangeRef = useRef(null);
  const [isRangeValueChange, setIsRangeValueChange] = useState(false);
  const [genderList, setGenderList] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [maximumPrice, setMaximumPrice] = useState(0);
  const [rangeValue, setRangeValue] = useState([0, maximumPrice || 10000]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSortBy = (value) => {
    setSortBy(value?.field);
    setSortOrder(value?.order);
  };

  const resetFilter = () => {
    setPage(1);
    setTotalPages(1);
    setSearch("");
    setSortBy("createdAt");
    setSortOrder("desc");
    setLimit(50);
    setCategory("");
    setSelectedColor("");
    setRangeValue([0, 10000]);
  };

  useEffect(() => {
    fetchGender();
    fetchCategories();
    getMaxPriceOfProducts();
  }, []);

  useEffect(() => {
    if (isCartUpdated) {
      dispatch(resetCartState());
      addToCartInfoToast();
    }
  }, [isCartUpdated]);

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
      image: product?.image,
      stock: product?.stock,
      updatedPrice: product?.updatedPrice,
    };
    dispatch(addToCart(formData));
  };

  // Debounced function
  const debouncedFetchResults = useCallback(
    debounce(() => fetchProducts(), 500),
    []
  );

  useEffect(() => {
    if (isSearching) {
      debouncedFetchResults();
      setIsSearching(false);
    }
    // Cancel any pending debounced function calls when the component unmounts or query changes
    return () => {
      debouncedFetchResults.cancel();
    };
  }, [search, debouncedFetchResults]);

  useEffect(() => {
    if (isSearching) return;
    fetchProducts();
  }, [
    page,
    sortBy,
    sortOrder,
    search,
    limit,
    category,
    selectedGender,
    selectedColor,
  ]);

  const fetchGender = async () => {
    try {
      const response = await apiService.getRequest("gender");
      if (response) {
        const filteredGender = response?.gender?.map((data) => {
          return {
            value: data?.name,
            label: data?.name,
          };
        });
        setGenderList(filteredGender);
      }
    } catch (error) {
      toast.error("error while fetching gender", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await apiService.getRequest("category");
      if (response) {
        const filteredCategories = response?.category?.map((category) => {
          return {
            icon: `ti ${category?.icon}`,
            value: category?.name,
            label: category?.name,
          };
        });
        filteredCategories.unshift({
          icon: "ti ti-circles",
          value: "",
          label: "All",
        });
        console.log("filteredCategories", filteredCategories);
        setCategoriesList(filteredCategories);
      }
    } catch (error) {
      toast.error("error while fetching category", error);
      console.log("error", error);
    }
  };

  const handleSearchChange = (e) => {
    setIsSearching(true);
    setSearch(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    if (isRangeValueChange) {
      fetchProducts();
    }
  }, [isRangeValueChange]);

  const handleRangeValue = (value) => {
    if (value[0] == rangeValue[0] && value[1] == rangeValue[1]) return;
    setIsRangeValueChange(true);
  };

  const fetchProducts = async () => {
    try {
      if (maximumPrice === 0) return;
      const [minPrice, maxPrice] = rangeValue;
      let urlParams = {
        page,
        sortBy,
        search,
        sortOrder,
        limit,
        category,
        gender: selectedGender,
        color: selectedColor,
        minPrice,
        maxPrice,
      };
      const params = new URLSearchParams(urlParams);
      setIsLoading(true);
      const response = await apiService.getRequest(
        `product/shop?${params?.toString()}`
      );
      setProductList(response.products || []);
      setIsProductLoaded(true);
      setTotalPages(response?.totalPages);
      setIsLoading(false);
      setIsRangeValueChange(false);
    } catch (error) {
      setIsLoading(false);
      setIsProductLoaded(true);
      console.error("Error fetching products:", error);
    }
  };

  const getMaxPriceOfProducts = async () => {
    if (maximumPrice) {
      return false;
    }
    try {
      setIsLoading(true);
      const response = await apiService.getRequest("product/max-price");
      if (!response.isError) {
        if (response?.maximumPrice) {
          setMaximumPrice(response?.maximumPrice || 0);
          setRangeValue((prev) => {
           return [0, response?.maximumPrice];
          });
          setIsRangeValueChange(true);
        } else {
          setIsLoading(false);
          console.error("Error getMaxPriceOfProducts:", response?.message);
        }
      }
    } catch (error) {
       setIsLoading(false);
       console.error("Error getMaxPriceOfProducts:", error);
    }
  }

  return (
    <>
      <Loader visible={isLoading} />
      <div className="container-fluid">
        <div className="card card-body py-3">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-sm-flex align-items-center justify-space-between">
                <h4 className="mb-4 mb-sm-0 card-title">Shop</h4>
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
                        Shop
                      </span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="card position-relative overflow-hidden">
          <div className="shop-part d-flex w-100">
            <div className="shop-filters flex-shrink-0 border-end d-none d-lg-block">
              <ul className="list-group pt-2 border-bottom rounded-0 category-list">
                <h6 className="my-3 mx-4 fw-semibold">Filter by Category</h6>
                {isProductLoaded && (
                  <CategoryFilter
                    setCategory={setCategory}
                    category={category}
                    categoriesList={categoriesList}
                  />
                )}
              </ul>
              <ul className="list-group pt-2 border-bottom rounded-0">
                <h6 className="my-3 mx-4 fw-semibold">Sort By</h6>
                {isProductLoaded && (
                  <PriceSortBy
                    handleSortBy={handleSortBy}
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                  />
                )}
              </ul>
              <div className="by-pricing border-bottom rounded-0">
                <h6 className="mt-4 mb-3 mx-4 fw-semibold">By Pricing :</h6>
                <div className="pb-4 px-4">
                  <div>
                    {isProductLoaded && maximumPrice && (
                      <PriceSliderComponent
                        min={0}
                        steps={2}
                        max={maximumPrice}
                        rangeRef={rangeRef}
                        rangeValue={rangeValue}
                        setRangeValue={(value) => {
                          setRangeValue(value);
                          handleRangeValue(value);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="by-gender border-bottom rounded-0">
                <h6 className="mt-4 mb-3 mx-4 fw-semibold">By Gender</h6>
                <div className="pb-4 px-4">
                  <div>
                    <Select2
                      className="form-select mr-sm-2  mb-2"
                      id="inlineFormCustomSelect"
                      options={genderList || []}
                      isMultiple={false}
                      handleOnChange={(event) => {
                        if (event === null) {
                          setSelectedGender("");
                        } else {
                          setSelectedGender(event?.value);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="by-colors border-bottom rounded-0">
                <h6 className="mt-4 mb-3 mx-4 fw-semibold">By Colors</h6>
                <ColorSelector onSelectColor={setSelectedColor} />
              </div>
              <div className="p-4">
                <a
                  href="javascript:void(0)"
                  onClick={resetFilter}
                  className="btn btn-primary w-100"
                >
                  Reset Filters
                </a>
              </div>
            </div>
            <div className="card-body p-4 pb-0">
              <div className="d-flex justify-content-between align-items-center gap-6 mb-4">
                <a
                  className="btn btn-primary d-lg-none d-flex"
                  data-bs-toggle="offcanvas"
                  href="#filtercategory"
                  role="button"
                  aria-controls="filtercategory"
                >
                  <i className="ti ti-menu-2 fs-6"></i>
                </a>
                <h5 className="fs-5 mb-0 d-none d-lg-block">Products</h5>
                <form className="position-relative">
                  <input
                    type="search"
                    className="form-control search-chat py-2 ps-5"
                    id="text-srh"
                    placeholder="Search Product"
                    onChange={handleSearchChange}
                    value={search}
                  />
                  <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3"></i>
                </form>
              </div>
              <div className="row">
                {productList?.length === 0 ? (
                  <>
                    <div className="col-sm-12 col-xxl-12">
                      <div className="card overflow-hidden rounded-2 border">
                        <div
                          className="position-relative justify-content-center text-center"
                          style={{ padding: "50px" }}
                        >
                          <h5 className="fs-5 mb-0 d-none d-lg-block">
                            No Product Found
                          </h5>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  productList?.map((product, index) => {
                    return (
                      <>
                        <div key={index} className="col-sm-6 col-xxl-4">
                          <div className="card overflow-hidden rounded-2 border">
                            <div className="position-relative">
                              <NavLink
                                to={`eccommerce/product-detail/${product?._id}`}
                                className="hover-img d-block overflow-hidden"
                              >
                                <img
                                  src={product?.image}
                                  className="card-img-top rounded-0"
                                  alt="matdash-img"
                                />
                              </NavLink>
                              <a
                                href="javascript:void(0)"
                                className="text-bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Add To Cart"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleAddToCart(product);
                                }}
                              >
                                <i className="ti ti-basket fs-4"></i>
                              </a>
                            </div>
                            <div className="card-body pt-3 p-4 product-text-body">
                              <h6 className="fw-semibold fs-4 product-name-tag">
                                {product?.productName}
                              </h6>
                              <div className="d-flex align-items-center justify-content-between">
                                <h6 className="fw-semibold fs-4 mb-0">
                                  {product?.updatedPrice
                                    ? product.updatedPrice
                                    : product?.basePrice}
                                  {product.updatedPrice && (
                                    <span className="ms-2 fw-normal text-muted fs-3">
                                      <del>{product?.basePrice}</del>
                                    </span>
                                  )}
                                </h6>
                                <RatingComponent
                                  rating={product?.ratings}
                                  readOnly={true}
                                  size={20}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                )}
              </div>
            </div>
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="filtercategory"
              aria-labelledby="filtercategoryLabel"
            >
              <div className="offcanvas-body shop-filters w-100 p-0">
                <ul className="list-group pt-2 border-bottom rounded-0 category-list">
                  <h6 className="my-3 mx-4 fw-semibold">Filter by Category</h6>
                  {isProductLoaded && (
                    <CategoryFilter
                      setCategory={setCategory}
                      category={category}
                      categoriesList={categoriesList}
                    />
                  )}
                </ul>
                <ul className="list-group pt-2 border-bottom rounded-0">
                  <h6 className="my-3 mx-4 fw-semibold">Sort By</h6>
                  {isProductLoaded && (
                    <PriceSortBy
                      handleSortBy={handleSortBy}
                      sortBy={sortBy}
                      sortOrder={sortOrder}
                    />
                  )}
                </ul>
                <div className="by-pricing border-bottom rounded-0">
                  <h6 className="mt-4 mb-3 mx-4 fw-semibold">By Pricing :</h6>
                  <div className="pb-4 px-4">
                    <div>
                      {isProductLoaded && maximumPrice && (
                        <PriceSliderComponent
                          min={0}
                          steps={2}
                          max={maximumPrice}
                          rangeRef={rangeRef}
                          rangeValue={rangeValue}
                          setRangeValue={(value) => {
                            setRangeValue(value);
                            handleRangeValue(value);
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="by-gender border-bottom rounded-0">
                  <h6 className="mt-4 mb-3 mx-4 fw-semibold">By Gender</h6>
                  <div className="pb-4 px-4">
                    <div>
                      <Select2
                        className="form-select mr-sm-2  mb-2"
                        id="inlineFormCustomSelect"
                        options={genderList || []}
                        isMultiple={false}
                        handleOnChange={(event) => {
                          if (event === null) {
                            setSelectedGender("");
                          } else {
                            setSelectedGender(event?.value);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="by-colors border-bottom rounded-0">
                  <h6 className="mt-4 mb-3 mx-4 fw-semibold">By Colors</h6>
                  <ColorSelector onSelectColor={setSelectedColor} />
                </div>
                <div className="p-4">
                  <a
                    href="javascript:void(0)"
                    onClick={resetFilter}
                    className="btn btn-primary w-100"
                  >
                    Reset Filters
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

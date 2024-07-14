import { useEffect, useState } from "react";
import apiService from "../../service/apiService";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import megaDDBG from "../../assets/images/backgrounds/mega-dd-bg.jpg";
import RatingComponent from "../../components/Rating/RatingComponent";

const Shop = () => {
  const [productList, setProductList] = useState([]);
  console.log("productList", productList);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await apiService.getRequest("product");
      if (response?.isError) {
        toast.error(response?.message);
        console.log("error", response?.message);
      } else {
        setProductList(response.products);
      }
    } catch (error) {
      toast.error(error?.message);
      console.log("error", error?.message);
    }
  };
  return (
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
                      to={'/'}
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
            <ul className="list-group pt-2 border-bottom rounded-0">
              <h6 className="my-3 mx-4 fw-semibold">Filter by Category</h6>
              <li className="list-group-item border-0 p-0 mx-4 mb-2">
                <a
                  className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-circles fs-5"></i>All
                </a>
              </li>
              <li className="list-group-item border-0 p-0 mx-4 mb-2">
                <a
                  className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-hanger fs-5"></i>Fashion
                </a>
              </li>
              <li className="list-group-item border-0 p-0 mx-4 mb-2">
                <a
                  className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-notebook fs-5"></i>Books
                </a>
              </li>
              <li className="list-group-item border-0 p-0 mx-4 mb-2">
                <a
                  className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-mood-smile fs-5"></i>Toys
                </a>
              </li>
              <li className="list-group-item border-0 p-0 mx-4 mb-2">
                <a
                  className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-device-laptop fs-5"></i>Electronics
                </a>
              </li>
            </ul>
            <ul className="list-group pt-2 border-bottom rounded-0">
              <h6 className="my-3 mx-4 fw-semibold">Sort By</h6>
              <li className="list-group-item border-0 p-0 mx-4 mb-2">
                <a
                  className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-ad-2 fs-5"></i>Newest
                </a>
              </li>
              <li className="list-group-item border-0 p-0 mx-4 mb-2">
                <a
                  className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-sort-ascending-2 fs-5"></i>Price: High-Low
                </a>
              </li>
              <li className="list-group-item border-0 p-0 mx-4 mb-2">
                <a
                  className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-sort-descending-2 fs-5"></i>Price:
                  Low-High
                </a>
              </li>
              <li className="list-group-item border-0 p-0 mx-4 mb-2">
                <a
                  className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                  href="javascript:void(0)"
                >
                  <i className="ti ti-ad-2 fs-5"></i>Discounted
                </a>
              </li>
            </ul>
            <div className="by-gender border-bottom rounded-0">
              <h6 className="mt-4 mb-3 mx-4 fw-semibold">By Gender</h6>
              <div className="pb-4 px-4">
                <div className="form-check py-2 mb-0">
                  <input
                    className="form-check-input p-2"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label
                    className="form-check-label d-flex align-items-center ps-2"
                    htmlFor="exampleRadios1"
                  >
                    All
                  </label>
                </div>
                <div className="form-check py-2 mb-0">
                  <input
                    className="form-check-input p-2"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option1"
                  />
                  <label
                    className="form-check-label d-flex align-items-center ps-2"
                    htmlFor="exampleRadios2"
                  >
                    Men
                  </label>
                </div>
                <div className="form-check py-2 mb-0">
                  <input
                    className="form-check-input p-2"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    value="option1"
                  />
                  <label
                    className="form-check-label d-flex align-items-center ps-2"
                    htmlFor="exampleRadios3"
                  >
                    Women
                  </label>
                </div>
                <div className="form-check py-2 mb-0">
                  <input
                    className="form-check-input p-2"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios4"
                    value="option1"
                  />
                  <label
                    className="form-check-label d-flex align-items-center ps-2"
                    htmlFor="exampleRadios4"
                  >
                    Kids
                  </label>
                </div>
              </div>
            </div>
            <div className="by-pricing border-bottom rounded-0">
              <h6 className="mt-4 mb-3 mx-4 fw-semibold">By Pricing</h6>
              <div className="pb-4 px-4">
                <div className="form-check py-2 mb-0">
                  <input
                    className="form-check-input p-2"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios5"
                    value="option1"
                    checked
                  />
                  <label
                    className="form-check-label d-flex align-items-center ps-2"
                    htmlFor="exampleRadios5"
                  >
                    All
                  </label>
                </div>
                <div className="form-check py-2 mb-0">
                  <input
                    className="form-check-input p-2"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios6"
                    value="option1"
                  />
                  <label
                    className="form-check-label d-flex align-items-center ps-2"
                    htmlFor="exampleRadios6"
                  >
                    0-50
                  </label>
                </div>
                <div className="form-check py-2 mb-0">
                  <input
                    className="form-check-input p-2"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios7"
                    value="option1"
                  />
                  <label
                    className="form-check-label d-flex align-items-center ps-2"
                    htmlFor="exampleRadios7"
                  >
                    50-100
                  </label>
                </div>
                <div className="form-check py-2 mb-0">
                  <input
                    className="form-check-input p-2"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios8"
                    value="option1"
                  />
                  <label
                    className="form-check-label d-flex align-items-center ps-2"
                    htmlFor="exampleRadios8"
                  >
                    100-200
                  </label>
                </div>
                <div className="form-check py-2 mb-0">
                  <input
                    className="form-check-input p-2"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios9"
                    value="option1"
                  />
                  <label
                    className="form-check-label d-flex align-items-center ps-2"
                    htmlFor="exampleRadios9"
                  >
                    Over 200
                  </label>
                </div>
              </div>
            </div>
            <div className="by-colors border-bottom rounded-0">
              <h6 className="mt-4 mb-3 mx-4 fw-semibold">By Colors</h6>
              <div className="pb-4 px-4">
                <ul className="list-unstyled d-flex flex-wrap align-items-center gap-2 mb-0">
                  <li className="shop-color-list">
                    <a
                      className="shop-colors-item rounded-circle d-block shop-colors-1"
                      href="javascript:void(0)"
                    ></a>
                  </li>
                  <li className="shop-color-list">
                    <a
                      className="shop-colors-item rounded-circle d-block shop-colors-2"
                      href="javascript:void(0)"
                    ></a>
                  </li>
                  <li className="shop-color-list">
                    <a
                      className="shop-colors-item rounded-circle d-block shop-colors-3"
                      href="javascript:void(0)"
                    ></a>
                  </li>
                  <li className="shop-color-list">
                    <a
                      className="shop-colors-item rounded-circle d-block shop-colors-4"
                      href="javascript:void(0)"
                    ></a>
                  </li>
                  <li className="shop-color-list">
                    <a
                      className="shop-colors-item rounded-circle d-block shop-colors-5"
                      href="javascript:void(0)"
                    ></a>
                  </li>
                  <li className="shop-color-list">
                    <a
                      className="shop-colors-item rounded-circle d-block shop-colors-6"
                      href="javascript:void(0)"
                    ></a>
                  </li>
                  <li className="shop-color-list">
                    <a
                      className="shop-colors-item rounded-circle d-block shop-colors-7"
                      href="javascript:void(0)"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4">
              <a href="javascript:void(0)" className="btn btn-primary w-100">
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
                  type="text"
                  className="form-control search-chat py-2 ps-5"
                  id="text-srh"
                  placeholder="Search Product"
                />
                <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3"></i>
              </form>
            </div>
            <div className="row">
              {productList?.map((product, index) => {
                return (
                  <>
                    <div className="col-sm-6 col-xxl-4">
                      <div className="card overflow-hidden rounded-2 border">
                        <div className="position-relative">
                          <NavLink
                            to={`eccommerce/product-detail/${product?._id}`}
                            className="hover-img d-block overflow-hidden"
                          >
                            <img
                              src={product?.thumbnail[0]?.url}
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
                          >
                            <i className="ti ti-basket fs-4"></i>
                          </a>
                        </div>
                        <div className="card-body pt-3 p-4">
                          <h6 className="fw-semibold fs-4">
                            {product?.productName}
                          </h6>
                          <div className="d-flex align-items-center justify-content-between">
                            <h6 className="fw-semibold fs-4 mb-0">
                              {product?.basePrice}
                              <span className="ms-2 fw-normal text-muted fs-3">
                                <del>{product?.basePrice}</del>
                              </span>
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
              })}
            </div>
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="filtercategory"
            aria-labelledby="filtercategoryLabel"
          >
            <div className="offcanvas-body shop-filters w-100 p-0">
              <ul className="list-group pt-2 border-bottom rounded-0">
                <h6 className="my-3 mx-4 fw-semibold">Filter by Category</h6>
                <li className="list-group-item border-0 p-0 mx-4 mb-2">
                  <a
                    className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-circles fs-5"></i>All
                  </a>
                </li>
                <li className="list-group-item border-0 p-0 mx-4 mb-2">
                  <a
                    className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-hanger fs-5"></i>Fashion
                  </a>
                </li>
                <li className="list-group-item border-0 p-0 mx-4 mb-2">
                  <a
                    className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-notebook fs-5"></i>Books
                  </a>
                </li>
                <li className="list-group-item border-0 p-0 mx-4 mb-2">
                  <a
                    className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-mood-smile fs-5"></i>Toys
                  </a>
                </li>
                <li className="list-group-item border-0 p-0 mx-4 mb-2">
                  <a
                    className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-device-laptop fs-5"></i>Electronics
                  </a>
                </li>
              </ul>
              <ul className="list-group pt-2 border-bottom rounded-0">
                <h6 className="my-3 mx-4 fw-semibold">Sort By</h6>
                <li className="list-group-item border-0 p-0 mx-4 mb-2">
                  <a
                    className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-ad-2 fs-5"></i>Newest
                  </a>
                </li>
                <li className="list-group-item border-0 p-0 mx-4 mb-2">
                  <a
                    className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-sort-ascending-2 fs-5"></i>Price:
                    High-Low
                  </a>
                </li>
                <li className="list-group-item border-0 p-0 mx-4 mb-2">
                  <a
                    className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-sort-descending-2 fs-5"></i>Price:
                    Low-High
                  </a>
                </li>
                <li className="list-group-item border-0 p-0 mx-4 mb-2">
                  <a
                    className="d-flex align-items-center gap-6 list-group-item-action text-dark px-3 py-6 rounded-1"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-ad-2 fs-5"></i>Discounted
                  </a>
                </li>
              </ul>
              <div className="by-gender border-bottom rounded-0">
                <h6 className="mt-4 mb-3 mx-4 fw-semibold">By Gender</h6>
                <div className="pb-4 px-4">
                  <div className="form-check py-2 mb-0">
                    <input
                      className="form-check-input p-2"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios10"
                      value="option1"
                      checked
                    />
                    <label
                      className="form-check-label d-flex align-items-center ps-2"
                      htmlFor="exampleRadios10"
                    >
                      All
                    </label>
                  </div>
                  <div className="form-check py-2 mb-0">
                    <input
                      className="form-check-input p-2"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios11"
                      value="option1"
                    />
                    <label
                      className="form-check-label d-flex align-items-center ps-2"
                      htmlFor="exampleRadios11"
                    >
                      Men
                    </label>
                  </div>
                  <div className="form-check py-2 mb-0">
                    <input
                      className="form-check-input p-2"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios12"
                      value="option1"
                    />
                    <label
                      className="form-check-label d-flex align-items-center ps-2"
                      htmlFor="exampleRadios12"
                    >
                      Women
                    </label>
                  </div>
                  <div className="form-check py-2 mb-0">
                    <input
                      className="form-check-input p-2"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios13"
                      value="option1"
                    />
                    <label
                      className="form-check-label d-flex align-items-center ps-2"
                      htmlFor="exampleRadios13"
                    >
                      Kids
                    </label>
                  </div>
                </div>
              </div>
              <div className="by-pricing border-bottom rounded-0">
                <h6 className="mt-4 mb-3 mx-4 fw-semibold">By Pricing</h6>
                <div className="pb-4 px-4">
                  <div className="form-check py-2 mb-0">
                    <input
                      className="form-check-input p-2"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios14"
                      value="option1"
                      checked
                    />
                    <label
                      className="form-check-label d-flex align-items-center ps-2"
                      htmlFor="exampleRadios14"
                    >
                      All
                    </label>
                  </div>
                  <div className="form-check py-2 mb-0">
                    <input
                      className="form-check-input p-2"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios15"
                      value="option1"
                    />
                    <label
                      className="form-check-label d-flex align-items-center ps-2"
                      htmlFor="exampleRadios15"
                    >
                      0-50
                    </label>
                  </div>
                  <div className="form-check py-2 mb-0">
                    <input
                      className="form-check-input p-2"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios16"
                      value="option1"
                    />
                    <label
                      className="form-check-label d-flex align-items-center ps-2"
                      htmlFor="exampleRadios16"
                    >
                      50-100
                    </label>
                  </div>
                  <div className="form-check py-2 mb-0">
                    <input
                      className="form-check-input p-2"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios17"
                      value="option1"
                    />
                    <label
                      className="form-check-label d-flex align-items-center ps-2"
                      htmlFor="exampleRadios17"
                    >
                      100-200
                    </label>
                  </div>
                  <div className="form-check py-2 mb-0">
                    <input
                      className="form-check-input p-2"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios18"
                      value="option1"
                    />
                    <label
                      className="form-check-label d-flex align-items-center ps-2"
                      htmlFor="exampleRadios18"
                    >
                      Over 200
                    </label>
                  </div>
                </div>
              </div>
              <div className="by-colors border-bottom rounded-0">
                <h6 className="mt-4 mb-3 mx-4 fw-semibold">By Colors</h6>
                <div className="pb-4 px-4">
                  <ul className="list-unstyled d-flex flex-wrap align-items-center gap-2 mb-0">
                    <li className="shop-color-list">
                      <a
                        className="shop-colors-item rounded-circle d-block shop-colors-1"
                        href="javascript:void(0)"
                      ></a>
                    </li>
                    <li className="shop-color-list">
                      <a
                        className="shop-colors-item rounded-circle d-block shop-colors-2"
                        href="javascript:void(0)"
                      ></a>
                    </li>
                    <li className="shop-color-list">
                      <a
                        className="shop-colors-item rounded-circle d-block shop-colors-3"
                        href="javascript:void(0)"
                      ></a>
                    </li>
                    <li className="shop-color-list">
                      <a
                        className="shop-colors-item rounded-circle d-block shop-colors-4"
                        href="javascript:void(0)"
                      ></a>
                    </li>
                    <li className="shop-color-list">
                      <a
                        className="shop-colors-item rounded-circle d-block shop-colors-5"
                        href="javascript:void(0)"
                      ></a>
                    </li>
                    <li className="shop-color-list">
                      <a
                        className="shop-colors-item rounded-circle d-block shop-colors-6"
                        href="javascript:void(0)"
                      ></a>
                    </li>
                    <li className="shop-color-list">
                      <a
                        className="shop-colors-item rounded-circle d-block shop-colors-7"
                        href="javascript:void(0)"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4">
                <a href="javascript:void(0)" className="btn btn-primary w-100">
                  Reset Filters
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

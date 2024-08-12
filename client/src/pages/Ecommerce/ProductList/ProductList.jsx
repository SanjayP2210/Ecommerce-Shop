import { useCallback, useEffect, useState } from "react";
import apiService from "../../../service/apiService";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import _, { debounce } from "lodash";
import upArrow from "../../../assets/images/svgs/up-arrow.svg";
import downArrow from "../../../assets/images/svgs/down-arrow.svg";
import Loader from "../../../components/Loader/Loader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0)
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("productName");
  const [sortOrder, setSortOrder] = useState("asc");
  const [limit, setLimit] = useState(10);
  const [category, setCategory] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isProductDeleted, setIsProductDeleted] = useState(false);
  //  const { error, loading, users, status, isProductProductDeleted, response } = useSelector(
  //    (state) => {
  //      return state.user;
  //    }
  //  );

  // Debounced function
  const debouncedFetchResults = useCallback(
    debounce((searchQuery) => fetchProducts(searchQuery), 500),
    []
  );

  useEffect(() => {
    if (isSearching) {
      const params = new URLSearchParams({
        page,
        sortBy,
        search,
        sortOrder,
        limit,
        category
      });
      debouncedFetchResults(params);
      setIsSearching(false);
    }
    // Cancel any pending debounced function calls when the component unmounts or query changes
    return () => {
      debouncedFetchResults.cancel();
    };
  }, [search, debouncedFetchResults]);

  useEffect(() => {
    if (isSearching) return;
    const params = new URLSearchParams({
      page,
      search,
      sortBy,
      sortOrder,
      limit,
      category,
    });

    fetchProducts(params);
  }, [page, sortBy, sortOrder, search, limit]);

  //  useEffect(() => {
  //    if (!loading && response) {
  //      setProducts(response?.users || []);
  //      setTotalPages(response?.totalPages);
  //    }
  //  }, [response]);

  //  useEffect(() => {
  //    if (error) {
  //      toast.error(error);
  //    }
  //  }, [error]);

  useEffect(() => {
    if (isProductDeleted) {
      const params = new URLSearchParams({
        page,
        search,
        sortBy,
        sortOrder,
        limit,
        category,
      });

      fetchProducts(params);
    }
  }, [isProductDeleted]);

  const handleSearchChange = (e) => {
    setIsSearching(true);
    setSearch(e.target.value);
    setPage(1);
  };

  const fetchProducts = async (params) => {
    try {
      setIsLoading(true);
      const response = await apiService.getRequest(
        `product?${params?.toString()}`
      );
      setProducts(response.products || []);
      setTotalPages(response?.totalPages);
      setTotalCount(response?.totalCount);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching products:", error);
    }
  };

  const formatedDate = (date) => {
    const currentDate = date ? new Date(date) : new Date();

    const options = {
      weekday: "short", // Short weekday name (e.g., Thu)
      month: "short", // Short month name (e.g., Jun)
      day: "2-digit", // Two-digit day of the month (e.g., 28)
      year: "numeric", // Full year (e.g., 2024)
    };

    return date
      ? currentDate?.toLocaleDateString("en-US", options)
      : new Intl.DateTimeFormat("en-US", options).format(currentDate);
  };

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    setSortBy(key);
    setSortOrder(direction);
    setPage(1);
  };

  const getSortIcon = (key) => {
    sortBy;
    if (sortConfig.key !== key) {
      return null;
    }
    return (
      <img
        style={{background: 'white',borderRadius: '50%'}}
        src={sortConfig.direction === "asc" ? upArrow : downArrow}
        alt={sortConfig.direction === "asc" ? "up-arrow" : "down-arrow"}
      />
    );
  };

  const removeProduct = async (id) => {
    try {
      setIsLoading(true);
      const response = await apiService.deleteRequest(`product/${id}`);
      if (response) {
        toast.success("Product deleted successfully!");
        setIsLoading(false);
        setIsProductDeleted(true);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Error deleting product:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Loader // Type of spinner
        visible={isLoading}
      />
      <div className="container-fluid">
        <div className="card card-body py-3">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-sm-flex align-items-center justify-space-between">
                <h4 className="mb-4 mb-sm-0 card-title">Shop list</h4>
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
                        Shop list
                      </span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="product-list">
          <div className="card">
            <div className="card-body p-3">
              <div className="d-flex justify-content-between align-items-center gap-6 mb-9">
                <form className="position-relative">
                  <input
                    type="text"
                    className="form-control search-chat py-2 ps-5"
                    id="text-srh search"
                    placeholder="Search Product"
                    name="search"
                    value={search}
                    onChange={handleSearchChange}
                  />
                  <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3"></i>
                </form>
                <a
                  className="fs-6"
                  href="javascript:void(0)"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="Filter list"
                >
                  <i className="ti ti-filter"></i>
                </a>
              </div>
              <div className="table-responsive border rounded">
                <table
                  style={{ width: "100%" }}
                  className="table align-middle mb-0 sortable-table"
                  id="sortable-table"
                >
                  <thead>
                    <tr>
                      {/* <th scope="col" style={{ width: "6%" }}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </th> */}
                      <th onClick={() => handleSort("productName")}>
                        Products {getSortIcon("productName")}
                      </th>
                      <th
                        style={{ width: "15%" }}
                        onClick={() => handleSort("createdAt")}
                      >
                        Date {getSortIcon("createdAt")}
                      </th>
                      <th
                        style={{ width: "10%" }}
                        onClick={() => handleSort("status")}
                      >
                        Status {getSortIcon("status")}
                      </th>
                      <th
                        style={{ width: "10%" }}
                        onClick={() => handleSort("updatedPrice")}
                      >
                        Price {getSortIcon("updatedPrice")}
                      </th>
                      <th scope="col" style={{ width: "10%" }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((prod, index) => {
                      return (
                        <>
                          <tr key={index}>
                            {/* <td>
                              <div className="form-check mb-0">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault1"
                                />
                              </div>
                            </td> */}
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src={prod?.image?.[0]}
                                  className="rounded-circle"
                                  alt={"thumbnail"}
                                  width="56"
                                  height="56"
                                />
                                <div className="ms-3">
                                  <h6 className="fw-semibold mb-0 fs-4">
                                    {prod?.productName}
                                  </h6>
                                  <div className="d-flex align-items-center">
                                    {prod?.categories?.map((categ, index1) => {
                                      return (
                                        <p className="mb-0" key={index1}>
                                          {index1 + 1 !=
                                          prod?.categories?.length
                                            ? `${categ?.name} ,`
                                            : categ?.name}
                                        </p>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0">
                                {formatedDate(prod?.createdAt) ||
                                  formatedDate()}
                              </p>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                {prod?.status?.length > 0 ? (
                                  <>
                                    <span className="text-bg-success p-1 rounded-circle"></span>
                                    <p className="mb-0 ms-2">
                                      {[prod?.status]?.join()}
                                    </p>
                                  </>
                                ) : "----"}
                              </div>
                            </td>
                            <td>
                              <h6 className="mb-0 fs-4">
                                {prod?.updatedPrice}
                              </h6>
                            </td>
                            <td>
                              <a
                                className="fs-6"
                                href="javascript:void(0)"
                                onClick={() => {
                                  navigate(
                                    `/eccommerce/product-detail/${prod._id}`
                                  );
                                }}
                              >
                                <i className="ti ti-info-circle-filled"></i>
                              </a>
                              <a
                                className="fs-6"
                                href="javascript:void(0)"
                                style={{ marginLeft: "20px" }}
                                onClick={() => {
                                  navigate(
                                    `/eccommerce/edit-product/${prod._id}`
                                  );
                                }}
                              >
                                <i className="ti ti-edit"></i>
                              </a>
                              <a
                                className="fs-6"
                                href="javascript:void(0)"
                                style={{ marginLeft: "20px" }}
                                onClick={() => {
                                  removeProduct(prod?._id);
                                }}
                              >
                                <i className="ti ti-trash"></i>
                              </a>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
                <div className="d-flex align-items-center justify-content-end py-1">
                  <p className="mb-0 fs-2">Rows per page:</p>
                  <select
                    className="form-select w-auto ms-0 ms-sm-2 me-8 me-sm-4 py-1 pe-7 ps-2 border-0"
                    aria-label="Default select example"
                    onChange={(e) => {
                      setPage(1);
                      setLimit(e.target.value);
                    }}
                  >
                    <option value="5">
                      5
                    </option>
                    <option selected value="10">10</option>
                    <option value="25">25</option>
                  </select>
                  <p className="mb-0 fs-2">{`
                    ${page * 1} - ${products?.length}
                   of ${totalCount}`}</p>
                  <nav aria-label="...">
                    <ul className="pagination justify-content-center mb-0 ms-8 ms-sm-9">
                      <li className="page-item p-1">
                        <a
                          className="page-link border-0 rounded-circle text-dark fs-6 round-32 d-flex align-items-center justify-content-center"
                          href="javascript:void(0)"
                          onClick={() =>
                            setPage((prev) => Math.max(prev - 1, 1))
                          }
                          disabled={page === 1}
                        >
                          <i className="ti ti-chevron-left"></i>
                        </a>
                      </li>
                      <li className="page-item p-1">
                        <a
                          className="page-link border-0 rounded-circle text-dark fs-6 round-32 d-flex align-items-center justify-content-center"
                          href="javascript:void(0)"
                          onClick={() =>
                            setPage((prev) => {
                              return Math.min(prev + 1, totalPages);
                            })
                          }
                          disabled={page === totalPages}
                        >
                          <i className="ti ti-chevron-right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;

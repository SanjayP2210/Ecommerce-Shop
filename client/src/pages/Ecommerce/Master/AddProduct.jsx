/* eslint-disable no-undef */
import { useEffect, useRef, useState } from "react";
import DropzoneComponent from "../../../components/DropZone/DropZone.jsx";
import Select2 from "../../../components/Select2/Select2.jsx";
import apiService, { BASE_URL } from "../../../service/apiService.js";
import { toast } from "react-toastify";
import ReactEditor from "../../../components/Editor/TextEditor.jsx";
import { RangeSlider } from "../../../components/RangeSlider/RangeSlider.jsx";
import AddCategory from "../../AddCategory.jsx";
import AddVariants from "../../AddVariants.jsx";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { handleNumberValidation } from "../../../constants/utilities.js";
import Loader from "../../../components/Loader/Loader.jsx";
import ReviewCard from "../../../components/ReviewCard/ReviewCard.jsx";
import { FormProvider, useForm } from "react-hook-form";
import InputBox from "../../../components/InputBox/InputBox.jsx";

const AddProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditFlow, setIsEditFlow] = useState(false);
  const defaultValues = {
    productName: "",
    taxClass: "",
    vatAmount: 0,
    basePrice: 0,
    categories: [],
    tags: [],
    variants: [],
    description: "",
    status: [],
    template: [],
    thumbnail: [],
    images: [],
    stock: 0,
    gender: [],
    discountType: "no_discount",
    discountValue: 0,
    updatedPrice:0
  };
  const [data, setData] = useState(defaultValues);
  const methods = useForm({
    reValidateMode: "onBlur",
    defaultValues,
  });
  const {
    handleSubmit,
    clearErrors,
    reset,
    getValues,
    setError,
    watch,
    errors,
  } = methods;
  console.log("data", data);
  console.log("errors", errors);
  const [description, setDescription] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedThumbnails, setUploadedThumbnails] = useState([]);
  const [variantData, setVariantData] = useState([
    { id: Date.now(), value: "", label: "" },
  ]);
  const [selectedOption, setSelectedOption] = useState("no_discount");
  const [priceValue, setPriceValue] = useState([50]);
  const [fixedDiscount, setFixedDiscount] = useState(0);
  const [categories, setCategories] = useState([
    { value: "computer", label: "Computer" },
    { value: "watches", label: "Watches" },
    { value: "headphones", label: "Headphones" },
    { value: "beauty", label: "Beauty" },
    { value: "fashion", label: "Fashion" },
    { value: "footwear", label: "Footwear" },
  ]);
  const [statusList, setStatusList] = useState([
    { value: "Published", label: "Published" },
    { value: "Draft", label: "Draft" },
    { value: "Sheduled", label: "Sheduled" },
    { value: "Inactive", label: "Inactive" },
  ]);
  const [tagList, setTagList] = useState([
    { value: "new", label: "New" },
    { value: "trending", label: "trending" },
    { value: "headphones", label: "Headphones" },
    { value: "beauty", label: "Beauty" },
    { value: "fashion", label: "Fashion" },
    { value: "footwear", label: "Footwear" },
  ]);
  const [genderList, setGenderList] = useState([]);
  const rangeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };

  const fetchCategories = async () => {
    try {
      const response = await apiService.getRequest("category");
      if (response) {
        const filteredCategories = response?.category?.map((cat) => {
          return {
            value: cat?._id,
            label: cat?.name,
          };
        });
        setCategories(filteredCategories);
      }
    } catch (error) {
      toast.error("error while fetching category", error);
      console.log("error", error);
    }
  };

  const fetchStatus = async () => {
    try {
      const response = await apiService.getRequest("status");
      if (response) {
        const filteredStatus = response?.status?.map((data) => {
          return {
            value: data?._id,
            label: data?.name,
          };
        });
        setStatusList(filteredStatus);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchTags = async () => {
    try {
      const response = await apiService.getRequest("tag");
      if (response) {
        const filteredTags = response?.tag?.map((data) => {
          return {
            value: data?._id,
            label: data?.name,
          };
        });
        setTagList(filteredTags);
      }
    } catch (error) {
      toast.error("error while fetching tags", error);
      console.log("error", error);
    }
  };

  const fetchGender = async () => {
    try {
      const response = await apiService.getRequest("gender");
      if (response) {
        const filteredGender = response?.gender?.map((data) => {
          return {
            value: data?._id,
            label: data?.name,
          };
        });
        setGenderList(filteredGender);
      }
      setIsLoading(false);
    } catch (error) {
      toast.error("error while fetching gender", error);
    }
  };

  const getDeletedFiles = (arr1, arr2) => {
    const set2 = new Set(arr2.map((item) => item.public_id || item.path));
    return arr1.filter((item) => !set2.has(item.public_id || item.path));
  };


  const resetForm = () => {
    setData(defaultValues);
    setDescription("");
    setUploadedImages([]);
    setUploadedThumbnails([]);
    setIsLoading(false);
  }

  const onSubmit = async (data) => {
    try {
      console.log("data",data);
      if (uploadedThumbnails?.length === 0) {
        $(window).scrollTop({ behavior: "smooth" });
        toast.warn("Upload Thumbnail");
        return;
      }
      const updatedData = {
        ...data,
        description,
        variants: variantData?.map(({ id, ...rest }) => {
          return { value: rest.value, label: rest?.label };
        }),
        status: data?.status?.value || data?.status?._id || data?.status,
        tags: data?.tags?.map((data) =>
          data?.value ? data?.value : data?._id
        ),
        categories: data?.categories?.map((data) =>
          data?.value ? data?.value : data?._id
        ),
        gender: data?.gender?.map((data) =>
          data?.value ? data?.value : data?._id
        ),
        template: data?.template?.value,
      };
      updatedData.updatedPrice = updatedData?.basePrice;
      updatedData.discountType = selectedOption;
      if (selectedOption === "percentage") {
        updatedData.discountValue = priceValue[0];
      } else if (selectedOption === "fixed_price") {
        updatedData.discountValue = fixedDiscount;
        if (fixedDiscount) {
          toast.warn("Fixed Discounted Price is more then 0");
          return
        }
      } else {
        updatedData.discountValue = 0;
      }
      delete updatedData["images"];
      delete updatedData["thumbnail"];
      const formData = new FormData();
      const formKeys = Object.keys(updatedData);
      uploadedImages.forEach((file) => {
        formData.append("newImages", file);
      });
      uploadedThumbnails.forEach((file) => {
        formData.append("newThumbnail", file);
      });
      formKeys.forEach((key) => {
        const keyValue =
          typeof updatedData[key] === "object"
            ? JSON.stringify(updatedData[key])
            : updatedData[key];
        formData.append(key, keyValue);
      });
      if (isEditFlow) {
        const imageList = uploadedImages?.filter((x) => x.public_id);
        const thumbnailList = uploadedThumbnails?.filter((x) => x.public_id);
        formData.append("images", JSON.stringify(imageList));
        formData.append("thumbnail", JSON.stringify(thumbnailList));
        const deletedImages = getDeletedFiles(data?.images, imageList);
        if (deletedImages?.length > 0) {
            formData.append("deletedImages", JSON.stringify(deletedImages));
        }
        const deletedThumbnail = getDeletedFiles(
          data?.thumbnail,
          thumbnailList
        );
        if (deletedThumbnail?.length > 0) {
          formData.append("deletedThumbnail", JSON.stringify(deletedThumbnail));
        }
      }
      return;
      setIsLoading(true);
      const response = isEditFlow ? await apiService.putRequest(`product/${id}`, formData)
        : await apiService.postRequest("product", formData);
      if (response) {
        toast.success("Product added successfully!");
        resetForm();
        navigate("/eccommerce/product-list");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error adding product");
      setIsLoading(false);
    }
  };

  const fetchProduct = async () => {
    try {
      setIsLoading(true);
      const response = await apiService.getRequest(
        `product/product-for-edit/${id}`
      );
      let productData = response.productData;
      const { description, images, thumbnail, discountType, discountValue } =
        productData;
      setDescription(description);
      setUploadedImages(images);
      setUploadedThumbnails(thumbnail);
      setSelectedOption(discountType);
      if (discountType === "percentage") {
        setPriceValue([discountValue]);
      }
      if (discountType === "fixed_price") {
         setFixedDiscount(discountValue);
      }
      const variants = productData?.variants?.map((x) => {
        return { ...x, id: x._id, label: x.label };
      });
      setVariantData(variants);
      setData(productData);
      setIsLoading(false);
      setIsEditFlow(true);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) fetchProduct();
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    fetchCategories();
    fetchTags();
    fetchStatus();
    fetchGender();
  }, []);
  const title = isEditFlow ? "Edit Product" : "Add Product";

  return (
    <>
      <Loader visible={isLoading} />
      <div className="container-fluid">
        <div className="card card-body py-3">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="d-sm-flex align-items-center justify-space-between">
                <h4 className="mb-4 mb-sm-0 card-title">{title}</h4>
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
                        {title}
                      </span>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <FormProvider {...methods}>
          <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-8 ">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-7">
                      <h4 className="card-title">General</h4>

                      <button
                        className="navbar-toggler border-0 shadow-none d-md-none"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#createFormSideMenu"
                        aria-controls="createFormSideMenu"
                      >
                        <i className="ti ti-menu fs-5 d-flex"></i>
                      </button>
                    </div>
                    <div className="mb-4">
                      {/* <label className="form-label">
                        Product Name <span className="text-danger">*</span>
                      </label> */}
                      {/* <input
                      type="text"
                      className="form-control"
                      name="productName"
                      id="productName"
                      required
                      autoComplete="off"
                      value={data.productName}
                      onChange={handleInput}
                    /> */}
                      <InputBox
                        label={"Product Name"}
                        id="productName"
                        name="productName"
                        validation={{
                          required: "Product Name is required",
                        }}
                      />
                      <p className="fs-2">
                        A product name is required and recommended to be unique.
                      </p>
                    </div>
                    <div>
                      <label className="form-label">Description</label>
                      {/* <Editor
                      setValue={setDescription}
                      value={data?.description}
                    /> */}
                      <ReactEditor
                        setValue={(e) => {
                          methods.setValue("description", e);
                          setDescription(e);
                        }}
                        value={data?.description}
                      />
                      <p className="fs-2 mb-0">
                        Set a description to the product for better visibility.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-7">Media</h4>
                    <DropzoneComponent
                      id={"dropzone2"}
                      btnText={"Drop files here to upload"}
                      maxFiles={10}
                      setFiles={setUploadedImages}
                      files={uploadedImages}
                      name={"images"}
                      data={data}
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-7">Variation</h4>
                    <label className="form-label">Add Product Variations</label>
                    <AddVariants
                      setData={setVariantData}
                      data={variantData || []}
                    />
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-7">Pricing</h4>
                    <div className="mb-7 row">
                      <div className="col-md-7">
                        {/* <label className="form-label">
                          Base Price <span className="text-danger">*</span>
                        </label> */}
                        {/* <input
                          type="text"
                          className="form-control"
                          value={data?.basePrice}
                          name="basePrice"
                          placeholder="00000"
                          maxLength={5}
                          onChange={(e) => {
                            e = handleNumberValidation(e);
                            handleInput(e);
                          }}
                        /> */}
                        <InputBox
                          label={"Base Price"}
                          id="basePrice"
                          value={data?.basePrice}
                          name="basePrice"
                          validation={{
                            valueAsNumber: true,
                            min: {
                              value: 1,
                              message: "Base price is more than 0", // Custom error message
                            },
                            onChange: (e) => {
                              e = handleNumberValidation(e);
                              handleInput(e);
                            },
                          }}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">
                          Stock <span className="text-danger">*</span>
                        </label>
                        <InputBox
                          value={data?.stock}
                          name="stock"
                          id="stock"
                          validation={{
                            valueAsNumber: true,
                            min: {
                              value: 1,
                              message: "Stock is more than 0", // Custom error message
                            },
                            onChange: (e) => {
                              e = handleNumberValidation(e);
                              handleInput(e);
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div className="mb-7">
                      <label className="form-label">Discount Type</label>
                      <nav>
                        <div
                          className="nav nav-tabs justify-content-between align-items-center gap-9"
                          id="nav-tab"
                          role="tablist"
                        >
                          <label
                            htmlFor="radio1"
                            className="form-check-label form-check p-3  border gap-2 rounded-2 d-flex flex-fill justify-content-center cursor-pointer"
                            id="customControlValidation2 nav-contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home"
                            aria-controls="nav-home"
                          >
                            <input
                              type="radio"
                              className="form-check-input"
                              name="discountType"
                              id="radio1"
                              value={"no_discount"}
                              checked={selectedOption == "no_discount"}
                              onChange={(e) => {
                                setSelectedOption(e?.target?.value);
                              }}
                            />
                            <span className="fs-4 text-dark">No Discount</span>
                          </label>
                          <label
                            htmlFor="radio2"
                            className="form-check-label p-3 form-check border gap-2 rounded-2 d-flex flex-fill justify-content-center cursor-pointer"
                            id="customControlValidation2 nav-contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile"
                            aria-controls="nav-profile"
                          >
                            <input
                              type="radio"
                              className="form-check-input"
                              name="discountType"
                              id="radio2"
                              value={"percentage"}
                              checked={selectedOption === "percentage"}
                              onChange={(e) => {
                                setSelectedOption(e?.target?.value);
                              }}
                            />
                            <span className="fs-4 text-dark">Percentage %</span>
                          </label>
                          <label
                            htmlFor="radio3"
                            className="form-check-label form-check p-3 border gap-2 rounded-2 d-flex flex-fill justify-content-center cursor-pointer"
                            id="customControlValidation2 nav-contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-contact"
                            aria-controls="nav-contact"
                          >
                            <input
                              type="radio"
                              className="form-check-input"
                              name="discountType"
                              id="radio3"
                              value={"fixed_price"}
                              checked={selectedOption === "fixed_price"}
                              onChange={(e) => {
                                setSelectedOption(e?.target?.value);
                              }}
                            />
                            <span className="fs-4 text-dark">Fixed Price</span>
                          </label>
                        </div>
                      </nav>
                      <div className="tab-content">
                        <div
                          className={`tab-pane fade mt-7 ${
                            selectedOption == "percentage" ? "active show" : ""
                          }`}
                          id="nav-profile"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                          tabIndex="0"
                        >
                          <div className="mt-3">
                            <div className="form-group">
                              <label className="form-label">
                                Set Discount Percentage{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <div style={{ marging: "30px 10px" }}>
                                <RangeSlider
                                  rangeRef={rangeRef}
                                  rangeValue={priceValue}
                                  setRangeValue={setPriceValue}
                                  id={"priceValue"}
                                  min={0}
                                  max={100}
                                />
                              </div>
                              <br />
                              <p className="fs-2">
                                Set a percentage discount to be applied on this
                                product.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`tab-pane fade mt-7 ${
                            selectedOption == "fixed_price" ? "active show" : ""
                          }`}
                          id="nav-contact"
                          role="tabpanel"
                          aria-labelledby="nav-contact-tab"
                          tabIndex="0"
                        >
                          <div className="mb-7">
                            <label className="form-label">
                              Fixed Discounted Price{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              value={fixedDiscount}
                              className="form-control"
                              placeholder="Discounted Price"
                              onChange={(e) => {
                                setFixedDiscount(e.target.value);
                              }}
                            />
                            <p className="fs-2">
                              Set the discounted product price. The product will
                              be reduced at the determined fixed price.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label">
                            Tax Class <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-select mr-sm-2"
                            id="inlineFormCustomSelect"
                            name="taxClass"
                            value={data?.taxClass}
                            onChange={handleInput}
                          >
                            <option selected="">Select an option</option>
                            <option value="1">Tax Free</option>
                            <option value="2">Taxable Goods</option>
                            <option value="3">Downloadable Products</option>
                          </select>
                          <p className="fs-2">Set the product tax class.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label">
                            VAT Amount (%){" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="vatAmount"
                            className="form-control"
                            value={data?.vatAmount}
                            onChange={(e) => {
                              e = handleNumberValidation(e);
                              handleInput(e);
                            }}
                          />
                          <p className="fs-2">Set the product VAT about.</p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                {isEditFlow && data?.reviews?.length > 0 && (
                  <ReviewCard reviews={data?.reviews} />
                )}
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                  <button
                    type="button"
                    className="btn bg-danger-subtle text-danger ms-6"
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div className="col-lg-4 thumbnail-upload-box">
                <div
                  className="offcanvas-md offcanvas-end"
                  tabIndex="-1"
                  id="createFormSideMenu"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-7">Thumbnail</h4>
                      <DropzoneComponent
                        id={"dropzone1"}
                        btnText={"Drop Thumbnail here to upload"}
                        maxFiles={1}
                        setFiles={setUploadedThumbnails}
                        files={uploadedThumbnails}
                        name={"thumbnail"}
                        data={data}
                      />
                      <p className="fs-2 text-center mt-2">
                        Set the product thumbnail image. Only *.png, *.jpg and
                        *.jpeg image files are accepted.
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between mb-7">
                        <h4 className="card-title">Status</h4>
                        <div className="p-2 h-100 bg-success rounded-circle"></div>
                      </div>
                      <div className="form-horizontal">
                        <div>
                          <label className="form-label">Status</label>
                          <Select2
                            className="form-select mr-sm-2  mb-2"
                            id="inlineFormCustomSelect"
                            options={statusList || []}
                            value={data?.status}
                            isMultiple={false}
                            handleOnChange={(value) => {
                              setData({
                                ...data,
                                status: value,
                              });
                            }}
                          />
                          <p className="fs-2 mb-0">Set the product status.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between mb-7">
                        <h4 className="card-title">Gender</h4>
                      </div>
                      <div>
                        <label className="form-label">Gender</label>
                        <Select2
                          className="form-select mr-sm-2  mb-2"
                          id="inlineFormCustomSelect"
                          options={genderList || []}
                          isMultiple={true}
                          value={data?.gender}
                          handleOnChange={(value) => {
                            setData({
                              ...data,
                              gender: value,
                            });
                          }}
                        />
                        <p className="fs-2 mb-0">Set the Gender</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-7">Product Details</h4>
                      <div className="mb-3">
                        <label className="form-label">Categories</label>
                        <Select2
                          id="categories"
                          name="categories"
                          value={data?.categories}
                          isMultiple={true}
                          handleOnChange={(value) => {
                            setData({
                              ...data,
                              categories: value,
                            });
                          }}
                          options={categories}
                          placeholder={"Select Categories"}
                        />
                        {/* <div className="d-flex justify-content-between">
                          <span className="fs-2 mb-0">
                            Add product to a category.
                          </span>
                          <small className="text-danger form-label error-msg">
                            category is required
                          </small>
                        </div> */}
                      </div>
                      <div className="mt-7">
                        <label className="form-label">Tags</label>
                        <Select2
                          id="tags"
                          name="tags"
                          value={data?.tags}
                          isMultiple={true}
                          handleOnChange={(value) => {
                            setData({
                              ...data,
                              tags: value,
                            });
                          }}
                          options={tagList || []}
                          placeholder={"Select Tags"}
                        />
                        {/* <div className="d-flex justify-content-between">
                          <span className="fs-2 mb-0">
                            Add product to a tags.
                          </span>
                          <small className="text-danger form-label error-msg">
                            tag is required
                          </small>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  {isEditFlow && (
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title mb-2">$2,420</h4>
                        <div className="d-flex align-items-center">
                          <p className="fs-4 fw-base mb-0">
                            Average Daily Sales
                          </p>
                          <p className="fs-2 text-success bg-success-subtle mb-0 px-2 py-1 rounded-1">
                            2.6%
                          </p>
                        </div>
                        <div className="mt-7">
                          <div id="sales"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-7">Product Template</h4>
                  <form action="" className="form-horizontal">
                    <div>
                      <label className="form-label text-nowrap">
                        Select a product template
                      </label>
                      <Select2
                        id="template inlineFormCustomSelect"
                        name="template"
                        className="form-select mr-sm-2  mb-2"
                        value={data?.template}
                        isMultiple={false}
                        handleOnChange={(value) => {
                          setData({
                            ...data,
                            template: value,
                          });
                        }}
                        options={[
                          {
                            value: "Default Template",
                            label: "Default Template",
                          },
                          { value: "Fashion", label: "Fashion" },
                          {
                            value: "Office Stationary",
                            label: "Office Stationary",
                          },
                          { value: "Electronics", label: "Electronics" },
                        ]}
                        placeholder={"Select product template"}
                      />
                      <p className="fs-2 mb-0">
                        Assign a template from your current theme to define how
                        a single product is displayed.
                      </p>
                    </div>
                  </form>
                </div>
              </div> */}
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default AddProduct;

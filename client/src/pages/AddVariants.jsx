import { useEffect, useMemo, useState } from "react";
import Select2 from "../components/Select2/Select2";
import apiService from "../service/apiService";

const AddVariants = ({ setData, data }) => {
  const [variantTypeList, setVariantTypeList] = useState(
    [] || [
      { value: "color", label: "Color" },
      { value: "size", label: "Size" },
      { value: "material", label: "Material" },
      { value: "style", label: "Style" },
    ]
  );

   const fetchVariantType = async () => {
     try {
       const response = await apiService.getRequest("variant");
       if (response) {
         const filteredStatus = response?.variant?.map((data) => {
           return {
             value: data?.name,
             label: data?.name[0]?.toUpperCase() + data?.name.slice(1),
           };
         });
         console.log("filteredStatus", filteredStatus);
         setVariantTypeList(filteredStatus);
       }
     } catch (error) {
       console.log("error", error);
     }
   };
  
  useEffect(() => {
    fetchVariantType();
  }, [])
  
  const handleAddItem = () => {
    const updatedArray = [
      ...data,
      { id: Date.now(), variantValue: "", variantType: "" },
    ];
    setData(updatedArray);
  };

  const handleRemoveItem = (id) => {
    const updatedArray = data.filter((item) => item?.id !== id);
    setData(updatedArray);
  };

  const handleChange = (name, id, newValue) => {
    const value = newValue;
    const updatedArray = data.map((item) =>
      item?.id === id ? { ...item, [name]: value } : item
    );
    setData(updatedArray);
  };

  return (
    <div>
      <div className="mb-3">
        {data?.map((item, index) => (
          <div key={item?.id} className="repeater-item">
            <div className="row mb-3">
              <div className="col-md-4">
                <Select2
                  id={`${item?.id}-variantType`}
                  name={`${item?.id}-variantType`}
                  value={item?.variantType}
                  isMultiple={false}
                  handleOnChange={(value) => {
                    handleChange("variantType", item?.id, value);
                  }}
                  options={variantTypeList}
                  placeholder={"Select Variation"}
                />
              </div>
              <div className="col-md-4 mt-3 mt-md-0">
                <input
                  type={item?.variantType?.value === "color" ? "color" : "text"}
                  className={`form-control ${
                    item?.variantType?.value === "color"
                      ? "form-control-color"
                      : ""
                  }`}
                  value={item?.variantValue}
                  name="variantValue"
                  onChange={(e) =>
                    handleChange("variantValue", item?.id, e.target.value)
                  }
                />
              </div>
              <div className="col-md-2 mt-3 mt-md-0">
                {data?.length > 1 && (
                  <button
                    className="btn bg-danger-subtle text-danger"
                    type="button"
                    onClick={() => handleRemoveItem(item?.id)}
                  >
                    <i className="ti ti-x fs-5 d-flex"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn bg-primary-subtle text-primary "
          onClick={handleAddItem}
        >
          <span className="fs-4 me-1">+</span>
          Add another variation
        </button>
      </div>
    </div>
  );
};

export default AddVariants;

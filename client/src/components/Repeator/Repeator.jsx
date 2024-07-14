import React, { useEffect, useRef, useState } from "react";
import Select2 from "../Select2/Select2";
const Repeator = ({ setData, data}) => {

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
                  options={[
                    { value: "color", label: "Color" },
                    { value: "size", label: "Size" },
                    { value: "material", label: "Material" },
                    { value: "style", label: "Style" },
                  ]}
                  placeholder={"Select Product"}
                />
              </div>
              <div className="col-md-4 mt-3 mt-md-0">
                <input
                  type="text"
                  name="variantValue"
                  value={item?.variantValue}
                  className="form-control"
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

export default Repeator;

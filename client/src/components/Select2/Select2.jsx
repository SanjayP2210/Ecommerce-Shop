import React, { useEffect, useRef } from "react";
import Select from "react-select";

const Select2 = ({
  options,
  id,
  name,
  value,
  handleOnChange,
  isMultiple = false,
  placeholder,
  selectRef,
}) => {
  //   const options = [
  //     { value: "option1", label: "Option 1" },
  //     { value: "option2", label: "Option 2" },
  //     { value: "option3", label: "Option 3" },
  //     { value: "option4", label: "Option 4" },
  //     { value: "option5", label: "Option 5" },
  //   ];
  //   useEffect(() => {
  //     const $ = window.jQuery;
  //     if ($ && $.fn && $.fn.select2) {
  //       $(".select2").select2({
  //         placeholder: "Select an option",
  //         allowClear: true,
  //         data: options?.map((option) => ({
  //           id: option.value,
  //           text: option.label,
  //         })),
  //       });
  //       //   $(selectRef.current

  //       // Attach change event handler
  //       $(".select2").on("click", function (e) {
  //         if (onChangeEvent) {
  //           onChangeEvent(e.target.value);
  //         }
  //       });
  //     } else {
  //       console.error("jQuery or Select2 is not loaded");
  //     }

  //     return () => {
  //       if ($ && $.fn && $.fn.select2) {
  //         // $(".select2").select2("destroy");
  //       }
  //     };
  //     // Initialize Select2 on mount
  //   }, [options]);

  const handleChange = (value) => {
    handleOnChange(value);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      minHeight: "38px",
      borderRadius: "0.25rem",
      borderColor: "#ced4da",
      cursor: "pointer",
      "&:hover": {
        borderColor: "var(--bs-primary);",
      },
      boxShadow: "none",
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "var(--bs-primary);",
      borderRadius: "8px",
      borderColor: "var(--bs-primary);",
      color: "#fff",
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: "white",
      backgroundColor: "var(--bs-primary);",
      borderRadius: "8px",
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: "#fff",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#d9534f",
        color: "white",
        borderRadius: "8px",
      },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled ? null : "white",
        color: "black",
        cursor: isDisabled ? "not-allowed" : "pointer",
        "&:hover": {
          backgroundColor: isFocused ? "var(--bs-primary);" : "white",
          color: "white",
        },
        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled && (isSelected ? data.color : "var(--bs-primary);"),
        },
      };
    },
  };

  return (
    <div>
      {/* <select
        id={id}
        name={name}
        required
        // value={value}

        style={{ width: "100%" }}
        className="select2 form-control"
        // multiple="multiple"
      >
        <option value="">Select an option</option>
      </select> */}

      {/* <br /> */}
      <Select
        isClearable={true}
        // isLoading={true}
        ref={selectRef}
        id={id}
        name={name}
        isMulti={isMultiple}
        value={value}
        isSearchable={true}
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default Select2;

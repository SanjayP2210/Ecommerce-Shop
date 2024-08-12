import React, { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import Select from "react-select";
import { getThemeColor } from "../../constants/utilities";

const Select2 = ({
  options,
  id,
  name,
  value,
  handleOnChange,
  isMultiple = false,
  placeholder,
  selectRef,
  isCapitalRequired = true,
  style,
  optionStyle,
}) => {
  const { loginUserData: user } = useSelector((state) => state.auth);
  const capitalizeFirstLetter = (string) => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
  };

  const customFormatOptionLabel = ({ label, value }) => (
    <div>{isCapitalRequired ? capitalizeFirstLetter(label) : label}</div>
  );

  const handleChange = (value) => {
    handleOnChange(value);
  };

  const customStyles = useMemo(() => {
    const themeColor = getThemeColor() === "light" ? "black" : "white";
    return {
      control: (base) => ({
        ...base,
        minHeight: "38px",
        minWidth: "30%",
        borderRadius: "0.25rem",
        backgroundColor: "var(--bs-body-bg)",
        borderColor: getThemeColor() ? "#e0e6eb" : "#313e54",
        cursor: "pointer",
        "&:hover": {
          borderColor: "var(--bs-primary);",
        },
        boxShadow: "none",
        ...style,
      }),
      singleValue: (base) => ({
        ...base,
        color: themeColor,
      }),
      multiValue: (base) => ({
        ...base,
        backgroundColor: "var(--bs-primary);",
        borderRadius: "8px",
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
          cursor: isDisabled ? "not-allowed" : "pointer",
          "&:hover": {
            backgroundColor: isFocused
              ? "var(--bs-primary)"
              : "var(--bs-body-bg)",
            color: "white",
          },
          ":active": {
            ...styles[":active"],
            color: "white",
          },
          color: themeColor,
          backgroundColor: isSelected
            ? "var(--bs-primary)"
            : "var(--bs-body-bg)",
          ...optionStyle,
        };
      },
      menuList: (base) => ({
        ...base,
        backgroundColor: "var(--bs-body-bg)",
      }),
    };
  }, [user?.themeColor]);

  const finalValue = useMemo(() => {
    let updateValue = value;
    if (options?.length === 0) return null;
    if (typeof value === "string" || typeof value === "number") {
      updateValue = options?.filter(
        (x) =>
          x?.value?.toString()?.toLowerCase() ===
          value?.toString()?.toLowerCase()
      );
    } else {
      if (value && value?.length > 0) {
        if (isMultiple) {
          const isValueAvailable = value[0]?.value || false;
          if (!isValueAvailable) {
            updateValue = value?.map((x) => {
              return {
                value: x?._id,
                label: x?.name,
              };
            });
          } else {
            updateValue = value;
          }
        } else {
          updateValue = options?.filter((x) => x?.value === value?.[0]);
        }
      }
    }
    return updateValue;
  }, [value, options]);

  return (
    <div>
      <Select
        formatOptionLabel={customFormatOptionLabel}
        isClearable={true}
        ref={selectRef}
        id={id}
        name={name}
        isMulti={isMultiple}
        value={finalValue}
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

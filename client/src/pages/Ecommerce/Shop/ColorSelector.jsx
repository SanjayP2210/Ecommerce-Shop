import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ColorSelector.css"; // Import the CSS file for styling

const ColorSelector = ({ onSelectColor }) => {
  const colors = [
    {
      value: "#0000ff",
      hex: "#0000ff",
      className: "shop-colors-1",
      label: "Blue",
    },
    {
      value: "#008000",
      hex: "#008000",
      className: "shop-colors-2",
      label: "Green",
    },
    {
      value: "#ff0000",
      hex: "#ff0000",
      className: "shop-colors-5",
      label: "Red",
    },
    {
      value: "#ffc0cb",
      hex: "#ffc0cb",
      className: "shop-colors-3",
      label: "Pink",
    },
    {
      value: "#ffff00",
      hex: "#ffff00",
      className: "shop-colors-4",
      label: "Yellow",
    },
    {
      value: "#ffd700",
      hex: "#ffd700",
      className: "shop-colors-7",
      label: "Gold",
    },
    {
      value: "#000000",
      hex: "#000000",
      className: "shop-colors-6",
      label: "Black",
    },
  ];
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    if (onSelectColor) {
        onSelectColor(color);
        console.log("onSelectColor",color);
    }
  };

    const getTickColor = (color) => {
        if (["#ffff00", "#ffd700", "#ffc0cb"].includes(color)) {
          return "black";
        } else {
          return "white";
        }
  }

  return (
    <div className="pb-4 px-4">
      <ul className="list-unstyled d-flex flex-wrap align-items-center gap-2 mb-0">
        {colors.map((color, index) => (
          <li key={index} className="shop-color-list">
            <a
              className={`shop-colors-item rounded-circle d-block ${
                color.className
              } ${selectedColor === color.value ? "selected" : ""}`}
              href="javascript:void(0)"
                onClick={(e) => {
                    e.preventDefault();
                    handleColorClick(color.value)
                }}
              style={{
                backgroundColor: color.hex,
                borderColor: selectedColor === color.value ? getTickColor(selectedColor) : color.value
              }}
              title={color.label}
            >
              {selectedColor === color.value && (
                <i
                  style={{ color: getTickColor(selectedColor) }}
                  className="tick-mark ti ti-check"
                ></i>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

ColorSelector.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      hex: PropTypes.string.isRequired,
      className: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  onSelectColor: PropTypes.func,
};

export default ColorSelector;

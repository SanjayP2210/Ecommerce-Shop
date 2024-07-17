import React, { useEffect, useRef, useState } from "react";
import Nouislider from "nouislider-react";
import "./index.css";
import { handleNumberValidation } from "../../constants/utilities";

export const RangeSlider = ({
  rangeValue,
  setRangeValue,
  min,
  max,
  isPricingRange = false,
  steps=5,
}) => {
  const [rangeArray, setRangeArray] = useState([]);
  useEffect(() => {
    if (min != null && max != null) {
      const stepSize = max / steps;
      const result = [];

      for (let i = 0; i <= steps; i++) {
        result.push(i * stepSize);
      }
      setRangeArray(result);
    }
  }, [min, max]);

  const sliderRef = useRef(null);

  // useEffect(() => {
  //   const range = rangeRef?.current;
  //   const tooltip = document.getElementById(`slider_tooltip-${id}`);
  //   const tooltipLabel = document.getElementById(`slider_tooltip_label-${id}`);
  //   if (range) {
  //     const updateTooltip = () => {
  //       const value = range?.value;
  //       const percentage =
  //         ((value - range.min) / (range.max - range.min)) * 100;
  //       tooltip.style.left = `calc(${percentage}% + (${
  //         8 - percentage * 0.15
  //       }px))`; // Adjust to align with the thumb
  //       tooltipLabel.textContent = isPricingRange ? value : `${value}%`;
  //     };

  //     // Initial update
  //     updateTooltip();

  //     // Update tooltip on range input change
  //     range.addEventListener("input", updateTooltip);

  //     // Update tooltip on range input change
  //     range.addEventListener("mouseup", function () {
  //       this.blur();
  //     });
  //   }
  // }, [rangeRef]);

  const onUpdate = (values) => {
    setRangeValue(values.map((val) => parseFloat(val).toFixed(2)));
  };

  return (
    <>
      <div className="range-slider">
        <Nouislider
          start={rangeValue}
          ref={sliderRef}
          connect={isPricingRange ? true : [true, false]}
          range={{
            min: [min],
            max: max,
          }}
          tooltips={true}
          pips={{
            mode: "values",
            values: rangeArray || [],
            density: 4,
          }}
          onUpdate={onUpdate}
        />
      </div>
    </>
  );
};

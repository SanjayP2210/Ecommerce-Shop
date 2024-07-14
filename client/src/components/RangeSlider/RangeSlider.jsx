import React, { useEffect } from 'react'

export const RangeSlider = ({ rangeRef, rangeValue, setRangeValue, id, min ,max}) => {
  const handleRangeChange = (event) => {
    const newValue = event.target.value;
    setRangeValue(newValue);
  };

  useEffect(() => {
    const range = rangeRef?.current;
    const tooltip = document.getElementById(`slider_tooltip-${id}`);
    const tooltipLabel = document.getElementById(`slider_tooltip_label-${id}`);
    if (range) {
      const updateTooltip = () => {
        const value = range?.value;
        const percentage =
          ((value - range.min) / (range.max - range.min)) * 100;
        tooltip.style.left = `calc(${percentage}% + (${
          8 - percentage * 0.15
        }px))`; // Adjust to align with the thumb
        tooltipLabel.textContent = `${value}%`;
      };

      // Initial update
      updateTooltip();

      // Update tooltip on range input change
      range.addEventListener("input", updateTooltip);

      // Update tooltip on range input change
      range.addEventListener("mouseup", function () {
        this.blur();
      });
    }
  }, [rangeRef]);

  return (
    <div className="range-slider__wrap">
        <input
          type="range"
          id="customRange1"
          min={min || "0"}
          max={max || "100"}
          ref={rangeRef}
          value={rangeValue}
          onChange={handleRangeChange}
          className="range-slider range-slider--primary"
        />
        <div className="range-min-max-label">
          <div>{min}</div>
          <div> {max}</div>
        </div>
        <div
          id={`slider_tooltip-${id}`}
          className="range-slider__tooltip range-slider__tooltip--on range-slider__tooltip--top tooltip"
        >
          <div
            id={`slider_tooltip_label-${id}`}
            className="range-slider__tooltip__label"
          >
            {`${rangeValue}%`}
          </div>
          <div className="range-slider__tooltip__caret"></div>
        </div>
    </div>
  );
};

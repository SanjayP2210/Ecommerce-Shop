import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ children, content, position }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div
          className={`tooltip-box tooltip-${position}`}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Tooltip on top"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

import React from "react";

export default function HeadingLine(props) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <svg height="50" width="50">
          <line
            x1="0"
            y1="25"
            x2="50"
            y2="25"
            style={{ stroke: " #5663da", strokeWidth: 3 }}
          />
        </svg>
        <h1 style={{ marginLeft: "10px" ,color:"#5663da",fontSize:"18px"}}>{props.text}</h1>
      </div>
    </div>
  );
}

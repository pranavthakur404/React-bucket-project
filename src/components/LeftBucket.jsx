import React from "react";

function LeftBucket({ allData, moveToLeft }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <h2>{allData.left}</h2>
      <button
        style={{ order: "1" }}
        onClick={() => {
          moveToLeft();
        }}
      >
        Add In Left Bucket
      </button>
    </div>
  );
}

export default LeftBucket;

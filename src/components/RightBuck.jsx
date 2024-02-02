import React from "react";

function RightBuck({ allData, moveToRight }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h2 style={{ order: "1" }}>{allData.right}</h2>
      <button
        onClick={() => {
          moveToRight();
        }}
      >
        Add In Right Bucket
      </button>
    </div>
  );
}

export default RightBuck;

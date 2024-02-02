import { useState } from "react";
import LeftBucket from "./components/LeftBucket";
import RightBuck from "./components/RightBuck";
const container = {
  width: "500px",
  padding: "2%",
  border: "1px solid #000",
  margin: "0 auto",
  marginTop: "10%",
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
};

function App() {
  const [allData, setData] = useState({
    left: 10,
    right: 0,
  });

  function moveToRight() {
    if (allData.left > 0) {
      setData((prevData) => {
        return {
          ...prevData,
          left: prevData.left - 1,
          right: prevData.right + 1,
        };
      });
    }
  }

  function moveToLeft() {
    if (allData.right > 0) {
      setData((prevData) => {
        return {
          ...prevData,
          left: prevData.left + 1,
          right: prevData.right - 1,
        };
      });
    }
  }

  return (
    <div style={container}>
      <LeftBucket allData={allData} moveToLeft={moveToLeft} />

      <RightBuck allData={allData} moveToRight={moveToRight} />
    </div>
  );
}

export default App;

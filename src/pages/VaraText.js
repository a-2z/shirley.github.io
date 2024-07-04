import React, { useEffect } from "react";
import Vara from "vara";
import "../styles/styles.css"; // Your CSS file import if needed

function VaraText({ text }) {
  useEffect(() => {
    var vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: text,
          textAlign: "center",
          x: 10,
          y: 10,
          fontSize: 60, // Adjust font size relative to viewport width
          strokeWidth: 1.8,
          duration: 2000
        }
      ]
    );
  }, []);

  const containerStyle = {
    border: "20px" // Adjust padding as needed
  };

  return (
    <div id="vara-container" className="z-[20]" style={containerStyle}></div>
  );
}

export default VaraText;

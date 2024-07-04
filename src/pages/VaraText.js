import React, { useEffect } from "react";
import Vara from "vara";
import "../styles/styles.css"; 

function VaraText() {
  useEffect(() => {
    var vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: "Happy",
          textAlign: "center",
          fontSize: 60,
          strokeWidth: 1.8,
          duration: 2000,
        },
        {
          text: "Birthday!",
          textAlign: "center",
          fontSize: 60, 
          strokeWidth: 1.8,
          duration: 2100,
          queued: false,
        }
      ]
    );
  }, []);

  return (
    <div id="vara-container" padding-top="100px"></div>
  );
}

export default VaraText;

import React, { useEffect } from "react";
import Vara from "vara";
import "../styles/styles.css"; 

function DanaText() {
  useEffect(() => {
    var vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: "From Dana",  
          textAlign: "left",
          fontSize: 40,
          color: "white",
          x: 10,
          y: 10,
          strokeWidth: 1.8,
          duration: 3100,
        },
      ]
    );
  }, []);

  return (
    <div id="vara-container" padding-top="100px"></div>
  );
}

export default DanaText;

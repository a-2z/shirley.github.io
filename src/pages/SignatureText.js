import React, { useEffect } from "react";
import Vara from "vara";
import "../styles/styles.css"; 

function SignatureText() {
  useEffect(() => {
    var vara = new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          id: "Alan",
          text: "From Alan",
          textAlign: "left",
          fontSize: 60,
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

export default SignatureText;

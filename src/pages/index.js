import React from "react";
import VaraText from "./VaraText";
import "../styles/styles.css";
import FireworksAnimation from "./FireworksAnimation"; // Import your animation component

const IndexPage = () => {
  return (
    <main>
      <div className="container">
          <VaraText text="Happy Birthday, Shirley!" />
          <br />
          <button onClick={() => alert("Happy Birthday, Shirley!")}>
          Send Wishes
          </button>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Happy Birthday, Shirley!</title>;

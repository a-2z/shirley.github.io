import React from "react";
import VaraText from "./VaraText";
import ShirleyText from "./ShirleyText";
import "../styles/styles.css";

const IndexPage = () => {
  return (
    <main>
      <div className="container">
        <VaraText />
        <ShirleyText />
        <br />
        <button>
          Open
        </button>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Happy Birthday, Shirley!</title>;

import React from "react";
import "../styles/styles.css";

const IndexPage = () => {
  return (
    <main>
      <h1>
        Happy Birthday, Shirley!
        <br />
        <span>🎉🎂🎈</span>
      </h1>
      <p>
        Wishing you a day filled with love, joy, and all your favorite things. Enjoy your special day!
      </p>
      <button onClick={() => alert("Happy Birthday, Shirley!")}>
        Send Wishes
      </button>
      <p>
        <a href="/about">Learn more about Shirley</a>
      </p>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Happy Birthday, Shirley!</title>;

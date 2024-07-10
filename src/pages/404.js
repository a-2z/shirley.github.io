import * as React from "react";
import { Link } from "gatsby";
import "../styles/styles.css";

const NotFoundPage = () => {
  return (
    <main className="not-found">
      <div className="background-animation"></div>
      <div className="scrim"></div>
      <div className="content">
        <h1>Oops! You took a wrong turn!</h1>
        <p>
          Looks like you're lost in space 🌌. Let's get you back on track!
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/" className="home-button">
            Beam me home!
          </Link>
        </p>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Page Not Found</title>;

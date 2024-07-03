import React from "react"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  textAlign: "center",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: "64px",
  maxWidth: "320px",
}
const headingAccentStyles = {
  color: "#FF69B4",
}
const paragraphStyles = {
  marginBottom: "48px",
  fontSize: "1.25rem",
}
const imageStyles = {
  width: "300px",
  borderRadius: "50%",
  marginBottom: "48px",
}
const buttonStyles = {
  padding: "10px 20px",
  fontSize: "1.25rem",
  color: "#FFF",
  backgroundColor: "#FF69B4",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Happy Birthday, Shirley!
        <br />
        <span style={headingAccentStyles}>🎉🎂🎈</span>
      </h1>
      <p style={paragraphStyles}>
        Wishing you a day filled with love, joy, and all your favorite things. Enjoy your special day!
      </p>
      <button style={buttonStyles} onClick={() => alert("Happy Birthday, Shirley!")}>
        Send Wishes
      </button>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Happy Birthday, Shirley!</title>

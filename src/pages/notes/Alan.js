// src/pages/Alan.js

import React from "react"

const Alan = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello, I'm Alan!</h1>
      <p style={styles.paragraph}>Welcome to my page on Shirley's birthday website.</p>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#666',
  }
}

export default Alan

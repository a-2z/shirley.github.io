/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-router`,
      options: {
        // If you need to pass options to react-router-dom, you can do so here
      },
    },
    // Add other plugins as needed
  ],
  
  
}

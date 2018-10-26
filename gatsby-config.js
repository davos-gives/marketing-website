module.exports = {
  siteMetadata: {
    title: 'Davos | Give Meaning',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
     resolve: `gatsby-plugin-google-analytics`,
     options: {
       trackingId: "UA-128187880-1",
       // Puts tracking script in the head instead of the body
       head: false,
       // Setting this parameter is optional
       anonymize: true,
       // Setting this parameter is also optional
       respectDNT: true,
       // Avoids sending pageview hits from custom paths
       // Enables Google Optimize using your container Id
       // Any additional create only fields (optional)

     },
   },
  ],
};

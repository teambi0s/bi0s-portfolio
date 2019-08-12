module.exports = {
  siteMetadata: {
    title: `bi0s - Learn | CTF | Exploit`,
    description: `A Student Community of Cyber Security Enthusiasts based in Amrita Vishwa Vidyapeetham, Amritapuri`,
    author: 'bi0s'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bi0s Website`,
        short_name: `bi0s`,
        start_url: `/`,
        background_color: `#ffc107`,
        theme_color: `#ffc107`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-yaml-full`,
      options: {
        createChildNodes: true,
        plugins: [
          `gatsby-yaml-full-markdown`, // Enable !markdown tags
          `gatsby-yaml-full-file`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `bi0s`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

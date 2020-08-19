module.exports = {
  siteMetadata: {
    title: 'The Cookware company',
    author: 'Jeroen Degloire',
    description:
      'The Cookware Company is a global cookware manufacturer with worldwide brand presence. Starting in Belgium in 2007 with their original brand, GreenPan, The Cookware Company was the first to introduce PTFE-free non-stick cookware into the market.',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:200,400,700,700i`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'The Cookware Company',
        short_name: 'Cookware',
        start_url: '/',
        background_color: '#7C8C42',
        theme_color: '#7C8C42',
        display: 'minimal-ui',
        icon: 'src/images/favicon-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-modal-routing`,
  ],
}

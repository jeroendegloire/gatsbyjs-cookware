module.exports = {
  siteMetadata: {
    title: 'The Cookware company',
    author: 'Jeroen Degloire',
    description:
      'The Cookware Company is a global cookware manufacturer with worldwide brand presence. Starting in Belgium in 2007 with their original brand, GreenPan, The Cookware Company was the first to introduce PTFE-free non-stick cookware into the market.',
    brands: [
      {
        logo: 'logo_greenpan.jpg',
        title: 'Greenpan',
        description:
          'In 2007 GreenPan introduced healthy ceramic non-stick cookware into the market. It was the start of a worldwide cookware revolution. Unlike traditional non-stick cookware GreenPan doesn’t use any toxic chemicals. Its Thermolon™ coating is made with natural materials, such as sand, and doesn’t contain PFOA, PFAS, lead or cadmium. The beautiful design and high quality materials result in a unique cooking experience. It’s the perfect brand for passionate chefs who want to cook healthy without compromising on performance!',
        url: 'https://www.greenpan.com',
      },
      {
        logo: 'logo_greenchef.svg',
        title: 'Greenchef',
        description:
          'GreenChef is a sister brand of GreenPan, known for its natural ceramic non-stick coating and smart design. The products are affordable and easy to use. They’re great for people who want to cook healthy, but don’t want to spend hours in the kitchen!',
        url: 'https://www.greenchef-cookware.com',
      },
      {
        logo: 'logo_greenlife.svg',
        title: 'Greenlife',
        description:
          'GreenLife is another sister brand of GreenPan and was created with one goal in mind: bring healthy cooking within everyone’s reach. The brand focuses on healthy, fuss-free cookware that’s perfect for every day cooking. The colourful designs are an eye-catcher in every kitchen!',
        url: 'https://www.greenlife-cookware.com',
      },
      {
        logo: 'logo_greenlife.svg',
        title: 'VitaVerde',
        description:
          'VitaVerde is a brand for people who want to discover healthy ceramic non-stick cookware without breaking the bank. VitaVerde offers easy to use cookware for every day. The design is basic but functional and all products have a natural ceramic non-stick coating.',
        url: 'https://www.vitaverde-cookware.com',
      },
      {
        logo: 'logo_greenlife.svg',
        title: 'Food-E',
        description:
          'Food-E is all about great healthy cookware for price conscious shoppers! The healthy ceramic non-stick coating doesn’t contain any harmful substances and will help you prepare tasty, everyday meals. It’s easy to use and easy to clean. The creative design turns cooking into a fun experience, perfect for boys and girls who know that healthy cooking is cool!',
        url: 'https://www.food-e.us/',
      },
      {
        logo: 'logo_greenlife.svg',
        title: 'BK',
        description:
          'BK is a renowned Dutch cookware brand which was launched in 1851. The brand offers a wide range of cookware products, varying from pans and casseroles to smart kitchen solutions. Over the years BK has proven to be a true pioneer and the brand has an impressive heritage. In 1951 BK received the royal predicate from Queen Juliana and the crown was added to the logo. Up to today BK remains a high-quality cookware brand that inspires and turns cooking into a unique experience!',
        url: 'https://www.greenlife-cookware.com',
      },
    ],
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
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-modal-routing`,
  ],
}

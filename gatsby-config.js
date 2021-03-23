require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Bezpieczne Instalacje Wojciech Bursztyn`,
    description: `Fotowoltaika, rekuperacja, pompy ciepła, elektryka. Bezpieczne instalacje dla domu i firmy. Wyróznia nas najlepsza jakość i trwałość instalacji. Dla nas najważnieszy jest zadowolony klient.`,
    author: `Dominik Kras <kontakt.dominikkras@gmail.com>`,
    keywords: `fotowoltaika, panele fotowoltaiczne, rekuperacja, elektryka, pompy ciepła, optymalizatory, SolarEdge, pv, panele pv, prąd ze słońca, ekologiczny dom, ekologia, oszczędzanie, OZE, fotovoltaika, falownik, inwerter, mój prąd, instalacja fotowoltaiczna dla firmy, fotowoltaika dla firmy, instalacje fotowoltaiczne dla firmy, fotowoltaika dla domu, panele do domu, jak mniej płacić za prąd`,
    siteUrl: `https://bezpieczneinstalacje.pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bezpieczneinstalacje.pl',
        sitemap: 'https://bezpieczneinstalacje.pl/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GOOGLE_TAG, 
          process.env.GOOGLE_AN, 
        ],
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.PIXEL_ID,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GOOGLE_AN, // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        googleTagManager: {
          trackingId: process.env.GOOGLE_TAG, // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: process.env.PIXEL_ID, // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:300,400,500,600,700`],
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bezpieczne Instalacje Wojciech Bursztyn`,
        short_name: `Bezpieczne Instalacje`,
        start_url: `/`,
        background_color: `#F2C926`,
        theme_color: `#F2C926`,
        display: `minimal-ui`,
        icon: `src/assets/images/fav.png`, // This path is relative to the root of the site.
        display: "standalone",
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

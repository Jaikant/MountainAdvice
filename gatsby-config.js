const { name } = require('./package.json');

module.exports = {
  pathPrefix: process.env.CI ? `/${name}` : `/`,
  siteMetadata: {
    author: 'You!',
    title: `Gatsby Default (Blog) Starter`,
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `netlifyimages`,
        path: `${__dirname}/static/img/`
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mountain Advice",
        short_name: "Mountain",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#6bd4c8",
        display: "minimal-ui",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/favicons/android-icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        endpoint: `https://sherpafeet.com/graphql`,
        query: `{
          ratings (guideuid: "RajeshThakur") {
            _id
            comment
            destination
            month
            year
            rating
            attractions {
              snow
              rivercrossings
              meadows
              wildlife
              villagestay
              localfestival
              forests
              camping
              waterbody
              rivercrossings
            }
            raterid
            date
            usr {
              picture
              firstname
              lastname
            }
          }
        }`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ],
}

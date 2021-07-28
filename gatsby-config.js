/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: 'gatsby-source-contentstack',
      options: {
        api_key: process.env.CONTENTSTACK_API_KEY,
        delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
        environment: process.env.CONTENTSTACK_ENVIRONMENT,
        cdn: process.env.CONTENTSTACK_CDN,
        expediteBuild: true,
        enableSchemaGeneration: true,
        type_prefix: 'Contentstack'
      }
    }
  ],
}

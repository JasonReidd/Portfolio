require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Home',
    titleTemplate: 'JR Portfolio',
    description:
      'Jason Reid\'s Development Portfolio.',
    url: 'https://jasonreidd.netlify.app/',
    image: '/images/icon.png',
    twitterUsername: '@JasonReidd',
    menuLinks: [
      {
        name: '',
        nameOverrideNav: 'Home',
        link: '/',
      },
      {
        name: 'Logo',
        link: '/logo',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'Employment',
        link: '/employment',
      },
      {
        name: 'Theme',
        link: '/theme',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'a3mxaqcs',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `portfolio/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jason Reid's Development Portfolio.`,
        short_name: `JR Portfolio`,
        start_url: `/`,
        background_color: `#1B1B1D`,
        theme_color: `#1B1B1D`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `/src/images/maskable_icon.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `/src/images/favicons/android-chrome-192x192.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `/src/images/favicons/android-chrome-512x512.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    'gatsby-plugin-styled-components',
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
  ],
};

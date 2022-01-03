const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  swcMinify: false,
  // i18n: {
  //   locales: ['en', 'id'],
  //   defaultLocale: 'en'
  // }
  experimental: {
    optimizeCss: true,
  },
})

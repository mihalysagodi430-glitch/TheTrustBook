/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  i18n: {
    locales: ['en','hu','ja','zh','hi','ru'],
    defaultLocale: 'en'
  }
};

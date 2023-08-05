const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "pt-br"],
    defaultLocale: "en",
    localeDetection: true,
  },
};

module.exports = withNextIntl(nextConfig)

const isProd = process.env.NODE_ENV === "production";

const withCSS = require('@zeit/next-css')
const withPWA = require('next-pwa')

module.exports = withCSS(withPWA({
  pwa: {
      disable: !isProd,
      dest: 'public'
  }
}))

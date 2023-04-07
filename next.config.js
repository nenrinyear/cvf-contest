const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  optimizeFonts: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.plugins.push(new MangleCssClassPlugin({
      classNameRegExp: '((hover|focus|active|disabled|visited|first|last|odd|even|group-hover|focus-within|xs|sm|md|lg|xl)[\\\\]*:)*tw-[a-zA-Z0-9_-]*([\\\\]*\/[0-9]*)?',
      ignorePrefixRegExp: '((hover|focus|active|disabled|visited|first|last|odd|even|group-hover|focus-within|xs|sm|md||lg|xl)[\\\\]*:)*',
      log: true,
    }))
    return config
  }
}

module.exports = nextConfig

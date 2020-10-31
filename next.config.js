const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    images: {
        domains: ['i.imgur.com', '1893713375.rsc.cdn77.org', 'user-images.githubusercontent.com'],
    },
})
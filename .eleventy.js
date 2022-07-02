module.exports = function (eleventyConfig) {
  const url = process.env.GITHUB_ACTIONS
    ? 'https://github.com/Nikolaos-Gkionis/nikolaos-ixd'
    : '/'
  const pathPrefix = process.env.GITHUB_ACTIONS
    ? '/nikolaos-ixd/'
    : '/'

  // Plugins
  eleventyConfig.addPlugin(require('./index.js'), {
    brandColour: '#444777',
    fontFamily: 'system-ui, sans-serif',
    icons: {
      mask: '/assets/favicon.png',
      shortcut: '/assets/favicon.png',
      touch: '/assets/favicon.png'
    },
    ogImage: '/assets/opengraph-image.png',
    homeKey: 'Home',
    parentSite: {
      url: '#',
      name: ''
    },
    pathPrefix,
    url,
    header: {
      organisationLogo: '',
      organisationName: '',
      productName: 'Nikolaos Gkionis',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },
    headingPermalinks: true,
    footer: {
      copyright: '© IxD',
      licence: 'Licensed under the [MIT Licence](https://github.com/Nikolaos-Gkionis/nikolaos-ixd/blob/master/LICENSE.txt), except where otherwise stated',
      meta: {
        items: [{
          href: 'https://www.11ty.dev',
          text: 'Documentation for Eleventy (opens in a new tab)',
          attributes: {
            target: '_blank'
          }
        }]
      }
    }
  })

  // Collections
  eleventyConfig.addCollection('layout', collection =>
    collection.getFilteredByTag('layout')
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )
  eleventyConfig.addCollection('homepage', collection =>
    collection.getFilteredByTag('homepage')
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0))
  )

  // Passthrough
  eleventyConfig.addPassthroughCopy('./docs/assets')

  // Watch
  eleventyConfig.addWatchTarget('./components/')
  eleventyConfig.addWatchTarget('./lib/')

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      output: 'public',
      layouts: '../layouts'
    },
    pathPrefix
  }
}

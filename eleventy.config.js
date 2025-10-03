import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function(eleventyConfig) {
    //Register the plugin
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    header: {
      service: {
        text: 'Select People for Invitation'
      },
    }
  })
// Pass through assets
  eleventyConfig.addPassthroughCopy('./docs/assets')

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'docs',
      output: '_site'
    },
        // Set path prefix for GitHub Pages
    pathPrefix: process.env.GITHUB_ACTIONS && '/spi-guidance/'
  }
};
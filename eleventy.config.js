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
    pathPrefix: process.env.GITHUB_ACTIONS ? '/docs/' : '/' ,
    dir: {
      // The folder where all your content will live:
      input: 'docs',
    }
  }
};
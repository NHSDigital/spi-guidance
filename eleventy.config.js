import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin'

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    header: {
      service: {
        text: 'Select People for Invitation'
      },
    }
  })

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // The folder where all your content will live:
      input: 'docs',
    }
  }
};
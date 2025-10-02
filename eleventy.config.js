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

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: "/docs/",
    dir: {
      // The folder where all your content will live:
      input: 'docs',
    }
  }
};
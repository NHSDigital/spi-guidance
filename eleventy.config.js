import { nhsukEleventyPlugin } from '@x-govuk/nhsuk-eleventy-plugin';

export default function(eleventyConfig) {
  // NHS frontend plugin
  eleventyConfig.addPlugin(nhsukEleventyPlugin, {
    header: { service: { text: 'Select People for Invitation' } },
  });

  // Pass through assets
  eleventyConfig.addPassthroughCopy('./docs/assets');

  // ---------- BUTTON ----------
  eleventyConfig.addShortcode("button", (label, type = "primary") => {
    const classes = type === "secondary"
      ? "nhsuk-button nhsuk-button--secondary"
      : "nhsuk-button";
    return `<button class="${classes}">${label}</button>`;
  });

  // ---------- LINK ----------
  eleventyConfig.addShortcode("link", (url, label, type = "secondary") => {
    const classes = type === "secondary"
      ? "nhsuk-button nhsuk-button--secondary"
      : "nhsuk-button";
    return `<a class="${classes}" href="${url}">${label}</a>`;
  });

  // ---------- INPUT ----------
  eleventyConfig.addShortcode("input", (type, placeholder) => {
    const id = `input-${placeholder.replace(/\s+/g, "-").toLowerCase()}`;
    return `
      <div class="nhsuk-form-group">
        <label class="nhsuk-label" for="${id}">${placeholder}</label>
        <input class="nhsuk-input" id="${id}" type="${type}" placeholder="${placeholder}">
      </div>
    `;
  });

  // ---------- CHECKBOX ----------
  eleventyConfig.addShortcode("checkbox", (label) => {
    const id = label.replace(/\s+/g, "-").toLowerCase();
    return `
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="${id}" name="${id}" type="checkbox" value="true">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="${id}">${label}</label>
      </div>
    `;
  });

  // ---------- ACCORDION ----------
  eleventyConfig.addShortcode("accordion", (title, content) => {
    const id = title.replace(/\s+/g, "-").toLowerCase();
    return `
      <div class="nhsuk-accordion" data-module="nhsuk-accordion">
        <section class="nhsuk-accordion__section">
          <button class="nhsuk-accordion__section-button" aria-expanded="false" aria-controls="${id}">
            ${title}
          </button>
          <div id="${id}" class="nhsuk-accordion__section-content" hidden>
            <p>${content}</p>
          </div>
        </section>
      </div>
    `;
  });

  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
        input: 'docs',
        includes: "_includes",
        output: '_site'     },
        // Set path prefix for GitHub Pages
    pathPrefix: process.env.GITHUB_ACTIONS && '/spi-guidance/'
  }
};

module.exports = function(eleventyConfig) {
  // Return your Object options:
  eleventyConfig.addPassthroughCopy("resources");
  eleventyConfig.setTemplateFormats([
  "hbs",
  "html",
  "png",
  "wav",
  "css" // css is not yet a recognized template extension in Eleventy
  ]);
  return {
    dir: {
      output: "docs"
    }
  }
};

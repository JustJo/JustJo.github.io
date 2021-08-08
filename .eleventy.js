module.exports = function(eleventyConfig) {
  // Return your Object options:
  eleventyConfig.addPassthroughCopy("resources");
  return {
    dir: {
      output: "docs"
    }
  }
};

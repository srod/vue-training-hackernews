module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/scss/_colors.scss";
        `
      }
    }
  },
  pwa: {
    workboxOptions: {
      exclude: ["_redirects"]
    }
  }
};

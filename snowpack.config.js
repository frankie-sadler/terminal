/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: "/"
  },
  plugins: ["@snowpack/plugin-typescript"],
  packageOptions: {},
  devOptions: {},
  buildOptions: {}
};

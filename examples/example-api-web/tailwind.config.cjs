const path = require("path");
const tremor = path.dirname(require.resolve("@tremor/react/package.json"));

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", `${tremor}/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {},
  },
  plugins: [],
};

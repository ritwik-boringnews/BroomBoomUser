module.exports = {
  root: true,
  extends: "@react-native-community",
  rules: {
    quotes: [2, "double", {avoidEscape: true}],
  },
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};

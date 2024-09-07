module.exports = function (api) {
  api.cache(true);
  return {
    // Native Configuration
    // presets: ['babel-preset-expo'],
    plugins: ["nativewind/babel"],
  };
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      require.resolve("expo-router/babel"),
      require.resolve("nativewind/babel"),
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            "@/assets": "./assets",
            "@/app": "./app",
            "@/components": "./components",
            "@/utils": "./utils",
            "@/state": "./state",
            "@/types": "./types",
          },
        },
      ],
    ],
  };
};

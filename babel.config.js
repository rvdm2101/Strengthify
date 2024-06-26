module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // presets: ['module:metro-react-native-babel-preset'],

    plugins: [
      [
        'module-resolver',
        {
          root: ['./src/'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['./tests/'],
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@context": "./src/context",
          }
        }
     ]
   ]
  };
};

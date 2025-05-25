const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Adding support for Lottie files
config.resolver.assetExts = [...config.resolver.assetExts, 'lottie'];
config.resolver.sourceExts = [...config.resolver.sourceExts, 'lottie'];

// Delete the old resolveRequest or replace it with:
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName.startsWith('lottie-react-native')) {
    return {
      filePath: path.join(__dirname, 'node_modules/lottie-react-native/src/js/LottieView.js'),
      type: 'sourceFile',
    };
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
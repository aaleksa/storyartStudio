const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  // Додаємо підтримку розширення .lottie
  config.resolver.assetExts.push('lottie');
  config.resolver.sourceExts.push('lottie');

  // Додаємо watchFolders, якщо потрібно (можна спробувати без цього спочатку)
  config.watchFolders = [
    path.resolve(__dirname, 'node_modules/lottie-react-native'),
  ];

  return config;
})();

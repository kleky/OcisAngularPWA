module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'wwwroot',
  root: 'wwwroot/',
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css'
  ]
};

Package.describe({
  name: 'ox2:normalize',
  summary: 'Normalize.css for ox2 platform',
  version: '3.0.2_1',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('lib/normalize.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:normalize');
  api.addFiles('tests/normalize-tests.js');
});

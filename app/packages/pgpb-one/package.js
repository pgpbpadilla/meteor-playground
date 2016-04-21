Package.describe({
  name: "pgpb:one",
  summary: "What this does",
  version: "1.0.0",
  git: "https://github.com/<username>/pgpb-one.git",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');

  api.use('ecmascript');
  api.use('templating');
  api.use('less@2.5.7');
  api.use('pgpb:two@1.0.0');

  var packages = [
    'iron:router'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles('lib/one-lib.js', ['client', 'server']);
  api.addFiles([
    'client/one-widget.html',
    'client/one-widget.js',
    'client/one-widget.less'
  ], 'client');
  api.addFiles('server/pgpb-one.js', 'server');

  api.export('PgpbOne');
});

Package.onTest(function (api) {
  api.use('pgpb:one');
  api.use('ecmascript');
  api.use('tinytest@1.0.0');
  api.addFiles('test/pgpb:one.js', 'server');
});

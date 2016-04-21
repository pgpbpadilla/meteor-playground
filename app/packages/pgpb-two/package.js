Package.describe({
  name: "pgpb:two",
  summary: "What this does",
  version: "1.0.0",
  git: "https://github.com/<username>/pgpb-one.git",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');

  api.use('ecmascript');
  api.use('templating');
  api.use('less@2.5.7');

  var packages = [
    'iron:router'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles('lib/two-lib.js', ['client']);
  api.addFiles([
    'client/two-widget.html',
    'client/two-widget.js',
    'client/two-widget.less'
  ], 'client');

  api.export('PgpbTwo');
});

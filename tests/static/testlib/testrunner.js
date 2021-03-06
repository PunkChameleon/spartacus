require(['/js/require-config.js'], function() {

  mocha.setup('tdd');

  require([
    '/unit/test-base-view.js',
    '/unit/test-cancellation.js',
    '/unit/test-errors.js',
    '/unit/test-fxa-refreshauth.js',
    '/unit/test-locale-utils.js',
    '/unit/test-mcc-mnc.js',
    '/unit/test-persona-config.js',
    '/unit/test-provider-obj.js',
    '/unit/test-session-callbacks.js',
    '/unit/test-session-watch.js',
    '/unit/test-settings.js',
    '/unit/test-utils.js',
    '/unit/test-capabilities.js'
  ], function() {
    if (window.mochaPhantomJS) {
      window.mochaPhantomJS.run();
    } else {
      window.mocha.run();
    }
  });

});

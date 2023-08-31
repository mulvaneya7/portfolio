'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      extension: 'scss',
    },
    googleFonts: {
      fonts: ['Exo'],
    },
  });

  return app.toTree();
};

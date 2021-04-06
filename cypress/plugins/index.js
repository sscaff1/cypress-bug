/// <reference types="cypress" />
// The @cypress/react project exposes preset plugin configurations
// These presets automatically register the events to bundle the project properly
const injectReactScriptsDevServer = require('@cypress/react/plugins/react-scripts')

module.exports = (on, config) => {
  // Internally, this method registers `dev-server:start` with the proper webpack configuration
  // Previously, it registered the `file:preprocessor` event.
  injectReactScriptsDevServer(on, config)

  return config
}

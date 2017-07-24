#!/usr/bin/env node

var Vulcanize = require('vulcanize');
var minify = require('html-minifier');
var hyd = require('hydrolysis');
var fs = require('fs');

const homeAssistantPolymerPath = '../home-assistant/homeassistant/components/frontend/www_static/home-assistant-polymer/';

function minifyHTML(html) {
  return minify.minify(html, {
    customAttrAssign: [/\$=/],
    removeComments: true,
    removeCommentsFromCDATA: true,
    removeCDATASectionsFromCDATA: true,
    collapseWhitespace: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    minifyJS: true,
    minifyCSS: true,
  });
}

const baseVulcanOptions = {
  inlineScripts: true,
  inlineCss: true,
  implicitStrip: true,
  stripComments: true,
};

const baseExcludes = [
  '/static/home-assistant-polymer/bower_components/font-roboto/roboto.html',
  '/static/home-assistant-polymer/bower_components/paper-styles/color.html',
];

const panelVulcan = new Vulcanize({
  inlineScripts: true,
  inlineCss: true,
  implicitStrip: true,
  stripComments: true,
  stripExcludes: baseExcludes,
  redirects: [
    '/local/custom_ui/|src/',
    '/static/home-assistant-polymer/|' + homeAssistantPolymerPath,
  ]
});

const toProcess = [
  // This is the main entry point
  {
    source: './panel/ha-panel-custom-ui.html',
    output: './ha-panel-custom-ui.html',
    vulcan: panelVulcan,
  },
  {
    source: './src/state-card-custom-ui.html',
    output: './state-card-custom-ui.html',
    vulcan: panelVulcan,
  },
];

function vulcanizeEntry(entry) {
  return new Promise((resolve, reject) => {
    console.log('Processing', entry.source);
    entry.vulcan.process(entry.source, (err, inlinedHtml) => {
      if (err !== null) {
        reject(`${entry.source}: ${err}`);
        return;
      }

      fs.writeFileSync(entry.output, minifyHTML(inlinedHtml));
      resolve();
    });
  });
}

const haMain = homeAssistantPolymerPath + 'src/home-assistant.html';

// Fetch all dependencies of main app and exclude them from panels
hyd.Analyzer.analyze(haMain)
    .then(function (analyzer) {
      return analyzer._getDependencies(haMain);
    })
    .then((deps) => {
      panelVulcan.stripExcludes = panelVulcan.stripExcludes.concat(deps.map(
        dep => dep.replace(homeAssistantPolymerPath, '/static/home-assistant-polymer/')
      ));
    })
    // Chain all vulcanizing work as promises
    .then(() => toProcess.reduce(
      (p, entry) => p.then(() => vulcanizeEntry(entry)),
      Promise.resolve()))
    .catch(err => console.error('Something went wrong!', err));

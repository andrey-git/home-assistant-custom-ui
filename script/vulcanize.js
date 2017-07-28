#!/usr/bin/env node

var Vulcanize = require('vulcanize');
var minify = require('html-minifier');
var hyd = require('hydrolysis');
var fs = require('fs');
var path = require('path');
const compile = require('google-closure-compiler-js').compile;

const homeAssistantPolymerPath = '../home-assistant/homeassistant/components/frontend/www_static/home-assistant-polymer/';

if (!fs.existsSync('build')) {
  fs.mkdirSync('build');
}

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

function compileJs(file) {
  console.log('Reading ' + file);
  const content = fs.readFileSync(file, 'utf8');
  console.log('Compiling ' + file);
  const flags = {
    jsCode: [{src: content}],
  };
  const out = compile(flags);
  const newName = path.join('build', path.basename(file));
  console.log('Writing ' + newName);
  fs.writeFileSync(newName, out.compiledCode);
  console.log('Done writing');
}

function copyFile(source, target) {
  console.log('Copying ' + source);
  if (fs.existsSync(target)) {
    fs.unlinkSync(target);
  }
  fs.linkSync(source, target);
}

function copyHtmlSources(dir) {
  fs.readdirSync(dir).forEach(file => {
    if (path.extname(file) === '.html') {
      copyFile(path.join(dir, file), path.join('build/', file));
    }
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
    '/local/custom_ui/|build/',
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
    source: './build/state-card-custom-ui.html',
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

copyHtmlSources('src/');
copyFile('src/hooks.js', 'build/hooks.js');
//compileJs('src/hooks.js');

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

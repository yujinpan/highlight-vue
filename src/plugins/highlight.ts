import highlight from 'highlight.js/lib/core';
// import 'highlight.js/styles/atom-one-light.css';

highlight.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
highlight.registerLanguage(
  'js',
  require('highlight.js/lib/languages/javascript')
);
highlight.registerLanguage('css', require('highlight.js/lib/languages/css'));
highlight.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
highlight.registerLanguage(
  'shell',
  require('highlight.js/lib/languages/shell')
);

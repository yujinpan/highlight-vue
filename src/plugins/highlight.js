import highlight from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';
// import 'highlight.js/styles/atom-one-light.css';

highlight.registerLanguage('javascript', javascript);
highlight.registerLanguage('css', css);
highlight.registerLanguage('xml', xml);

export function codeToHighlight(language, code) {
  return highlight.highlight(language, code.trim()).value;
}

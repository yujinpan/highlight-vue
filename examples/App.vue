<template>
  <div id="app" class="full-height">
    <h2>highlight-vue</h2>
    <h4>Version: <Highlight :code="version" :pre="false"></Highlight></h4>
    <h4>
      Github:
      <a target="_blank" href="https://github.com/yujinpan/highlight-vue"
        >https://github.com/yujinpan/highlight-vue</a
      >
    </h4>
    <h4>Author: <Highlight code="yujinpan" :pre="false"></Highlight></h4>
    <span v-for="(item, index) in usage" :key="index">
      <h3>{{ item.title }}</h3>
      <Highlight
        v-for="(code, index) in item.codes"
        :key="index"
        :code="code"
        :lang="item.lang"
      />
    </span>
  </div>
</template>

<script>
import Highlight from '../src';
import 'highlight.js/styles/atom-one-light.css';
import exampleTemplate from './example-template';
import pak from '../package';

export default {
  components: {
    Highlight
  },
  data() {
    return {
      version: pak.version,
      usage: [
        {
          title: 'Install:',
          codes: [`$ npm install --save highlight-vue`],
          lang: 'shell'
        },
        {
          title: 'Usage global:',
          codes: [
            `
import Vue from 'vue';
import Highlight from 'highlight-vue';
import 'highlight.js/styles/atom-one-light.css'; // import code style

Vue.use(Highlight);`,
            `<Highlight :code="code" lang="xml" />`
          ],
          lang: 'js'
        },
        {
          title: 'Usage local:',
          codes: [exampleTemplate],
          lang: 'vue'
        },
        {
          title: 'Add language pack:',
          codes: [
            `
import highlight from 'highlight.js/lib/highlight';
import java from 'highlight.js/lib/languages/java';

highlight.registerLanguage('java', java);`,
            `<Highlight :code="javaCode" lang="java" />`
          ],
          lang: 'js'
        },
        {
          title: 'Props',
          codes: [
            `
- \`code\` the code content
- \`lang\` the language, default import \`js\`, \`css\`, \`scss\`, \`shell\`, \`xml\`
- \`pre\` add the \`<pre></prev\` tag to wrap, default \`true\`
`
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
#app {
  font-size: 14px;
  color: #444;
  padding: 20px;
}
</style>

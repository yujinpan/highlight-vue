<template>
  <div id="app" class="full-height">
    <h2>Vue-highlight</h2>
    <h4>Version: {{ version }}</h4>
    <h4>
      Github:
      <a target="_blank" href="https://github.com/yujinpan/highlight-vue"
        >https://github.com/yujinpan/highlight-vue</a
      >
    </h4>
    <h4>Author: yujinpan</h4>
    <span v-for="item in usage" :key="item">
      <h3>{{ item.title }}</h3>
      <Highlight
        v-for="item in item.codes"
        :key="item"
        :code="item"
        class="highlight"
        lang="xml"
      />
    </span>
  </div>
</template>

<script>
import Highlight from '../lib';
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
          codes: [`npm install --save highlight-vue`]
        },
        {
          title: 'Usage global:',
          codes: [
            `import Vue from 'vue';\nimport VueHighlight from 'highlight-vue';\nimport 'highlight.js/styles/atom-one-light.css'; // import code style\n\nVue.use(VueHighlight);`,
            `<Highlight :code="code" lang="xml" />`
          ]
        },
        {
          title: 'Usage local:',
          codes: [exampleTemplate]
        },
        {
          title: 'Add language pack:',
          codes: [
            `import highlight from 'highlight.js/lib/highlight';\nimport java from 'highlight.js/lib/languages/java';\n\nhighlight.registerLanguage('java', java);`,
            `<Highlight :code="javaCode" lang="java" />`
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

  .highlight {
    background-color: #eee;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    line-height: 1.3em;

    ::v-deep code {
      font-family: Monaco;
    }
  }
}
</style>

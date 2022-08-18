<script lang="tsx">
import prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';

export default {
  functional: true,
  props: {
    code: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      default: 'vue'
    },
    pre: {
      type: Boolean,
      default: true
    }
  },
  render(h, { props, data }) {
    const lang =
      {
        vue: 'markup',
        html: 'markup',
        md: 'markdown',
        ts: 'typescript',
        sh: 'bash',
        shell: 'bash'
      }[props.lang] || props.lang;
    const code = prism.highlight(
      props.code.trim(),
      prism.languages[lang],
      lang
    );

    return props.pre ? (
      <pre class={`highlight-vue language-${lang}`} {...data}>
        <code {...{ domProps: { innerHTML: code } }}></code>
      </pre>
    ) : (
      <code
        class={`highlight-vue language-${lang}`}
        {...{ ...data, domProps: { innerHTML: code } }}
      ></code>
    );
  }
};
</script>

<style lang="scss">
pre.highlight-vue {
  border-radius: 4px;
}
code.highlight-vue {
  padding: 2px 4px !important;
}
</style>

<script lang="tsx">
import highlight from 'highlight.js/lib/core';

export default {
  functional: true,
  props: {
    code: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      default: 'xml'
    },
    pre: {
      type: Boolean,
      default: true
    }
  },
  render(h, { props, data }) {
    const code = highlight.highlight(props.lang, props.code.trim()).value;

    return props.pre ? (
      <pre class="highlight-vue" {...data}>
        <code {...{ domProps: { innerHTML: code } }}></code>
      </pre>
    ) : (
      <code
        class="highlight-vue"
        {...{ ...data, domProps: { innerHTML: code } }}
      ></code>
    );
  }
};
</script>

<style lang="scss">
code.highlight-vue,
pre.highlight-vue {
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  background-color: #fafafa;
}

code.highlight-vue,
pre.highlight-vue code {
  padding: 2px 4px;
  font-size: 86%;
  font-family: 'Menlo', 'DejaVu Sans Mono', 'Liberation Mono', 'Consolas',
    'Ubuntu Mono', 'Courier New', 'andale mono', 'lucida console', monospace;
}

pre.highlight-vue {
  font-size: 0.9em;
  overflow: auto;
  padding: 16px 24px;
  line-height: 1.6;
  word-break: break-all;
  word-wrap: break-word;

  code {
    padding: unset;
    font-size: inherit;
    background: unset;
    border: unset;
    border-radius: unset;
  }
}
</style>

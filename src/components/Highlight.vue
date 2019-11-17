<template>
  <pre><code v-html="highlightCode"></code></pre>
</template>

<script>
import { codeToHighlight } from '@/plugins/highlight';

export default {
  props: {
    code: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  },
  computed: {
    highlightCode() {
      return codeToHighlight(this.lang, this.code);
    }
  }
};
</script>

export default `<template>
  <Highlight class="code" :code="code" lang="xml" />
</template>

<script>
import Highlight from 'highlight-vue';
import 'highlight.js/styles/atom-one-light.css'; // import code style

export default {
  components: {
    Highlight
  },
  data() {
    return {
      code: '<Highlight :code="code" lang="xml" />'
    };
  }
};
</script>`;

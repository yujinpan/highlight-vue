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
</script>

<style scoped lang="scss">
// container style
.code {
  background-color: #eee;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  line-height: 1.3em;

  ::v-deep code {
    font-family: Monaco;
  }
}
</style>`;

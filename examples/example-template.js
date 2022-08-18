export default `<template>
  <Highlight class="code" :code="code" lang="xml" />
</template>

<script>
import Highlight from 'highlight-vue';

// theme(required)
// light style
import 'highlight-vue/dist/themes/light';
// dart style
// import 'highlight-vue/dist/themes/dart';

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

# vue-highlight

highlight.js for vue component.

[online example](https://yujinpan.github.io/vue-highlight/)

## usage - install

`npm install --save vue-highlight`

## usage - global

```
import Vue from 'vue';
import VueHighlight from 'vue-highlight';
import 'highlight.js/styles/atom-one-light.css'; // import code style

Vue.use(VueHighlight);
```

```
<Highlight :code="code" lang="xml" />
```

## usage - local

```
<template>
  <Highlight class="code" :code="code" lang="xml" />
</template>

<script>
import Highlight from 'vue-highlight';
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
</style>
```

## add language pack

```
import highlight from 'highlight.js/lib/highlight';
import java from 'highlight.js/lib/languages/java';

highlight.registerLanguage('java', java);
```

```
<Highlight :code="javaCode" lang="java" />
```
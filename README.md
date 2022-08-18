# highlight-vue

[`prismjs`](https://prismjs.com/) for vue component.

[https://yujinpan.github.io/highlight-vue/](https://yujinpan.github.io/highlight-vue/)

## Usage

### Install

`npm install --save highlight-vue`

### Global

```js
import Vue from 'vue';
import Highlight from 'highlight-vue';

// theme(required)
// light style
import 'highlight-vue/lib/themes/light';
// dart style
// import 'highlight-vue/lib/themes/dart';

Vue.use(Highlight);
```

```vue
<Highlight :code="code" lang="xml" />
```

### Local

```vue
<template>
  <Highlight class="code" :code="code" lang="xml" />
</template>

<script>
import Highlight from 'highlight-vue';

// theme(required)
// light style
import 'highlight-vue/lib/themes/light';
// dart style
// import 'highlight-vue/lib/themes/dart';

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
```

### Add language pack

```js
import 'prismjs/components/prism-java';
```

```vue
<Highlight :code="javaCode" lang="java" />
```

### More themes

```js
import 'prismjs/themes/prism-dark.css';
```

### Props

- `code` the code content
- `lang` the language, default import `js`, `css`, `scss`, `shell`, `xml`
- `pre` add the `<pre></prev` tag to wrap, default `true`

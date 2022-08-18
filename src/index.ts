// 主组件
import Highlight from '@/components/Highlight.vue';

// @ts-ignore
Highlight.install = (Vue) => {
  Vue.component('Highlight', Highlight);
};

// Vue.component()
export default Highlight;

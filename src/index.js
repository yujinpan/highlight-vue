// 主组件
import Highlight from '@/components/Highlight';

// Vue.use()
Highlight.install = (Vue) => {
  Vue.component('Highlight', Highlight);
};

// Vue.component()
export default Highlight;

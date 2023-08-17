import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import './assets/scss/standard.scss';
import './assets/style/standard.scss';
import './assets/iconFont/iconFontGlob.scss';


// 引入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// 富文本编辑器对应的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// 注册富文本编辑器组件为全局组件
Vue.use(VueQuillEditor)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

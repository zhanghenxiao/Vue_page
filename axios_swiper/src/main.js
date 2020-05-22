import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// require('vue-video-player/dist/vue-video-player.js')
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


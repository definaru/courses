import Vue from 'vue';
import Vuelidate from 'vuelidate'
import Footer from './Footer.vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import Routes from './routes'
import BootstrapVue from 'bootstrap-vue'
import vueHeadful from 'vue-headful'
import { i18n } from './plugins/i18n'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BBreadcrumb } from 'bootstrap-vue'
import { BNavbar } from 'bootstrap-vue'
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
//import vuetify from './plugins/vuetify'

//import '../../../styles/styles.sass'
//import '../_variables.scss'


Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuelidate);
Vue.use(DropdownPlugin);
Vue.use(TablePlugin);

Vue.config.productionTip = false;
Vue.component('app-footer', Footer);
Vue.component('b-navbar', BNavbar);
Vue.component('vue-headful', vueHeadful);
Vue.component('b-breadcrumb', BBreadcrumb);


const router = new VueRouter({
  mode: 'history', routes: Routes
});

const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
      return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
      if (to.hash === '#anchor2') {
        position.offset = { y: 100 }
      }
      if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        return position
      }
      return false
    }

    return new Promise(resolve => {
      if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }
      this.app.$root.$once('triggerScroll', () => {
        resolve(position)
      })
    })
  }
}


new Vue({
    el: '#app',
    i18n,
    scrollBehavior,
    //router: 
    router,
    render: h => h(App),
    //vuetify,
    components: { App }
});

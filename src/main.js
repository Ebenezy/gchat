import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSearch, faCommentAlt, faUserFriends, faPhoneAlt, faEllipsisH, faEllipsisV, faAngleLeft, faVideo, faPaperclip, faMicrophone, faSmile, faVideoSlash, faChevronDown, faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faSearch, faCommentAlt, faUserFriends, faPhoneAlt, faEllipsisH, faEllipsisV, faAngleLeft, faVideo, faPaperclip, faMicrophone, faSmile, faVideoSlash, faChevronDown, faCaretDown, faUser )

Vue.component('font-awesome-icon', FontAwesomeIcon)

import vueCountryRegionSelect from 'vue-country-region-select'
Vue.use(vueCountryRegionSelect)

Vue.use(BootstrapVue)

import Switches from 'vue-switches';

Vue.config.productionTip = false

new Vue({
  router,
    Switches,
  render: h => h(App)
}).$mount('#app')

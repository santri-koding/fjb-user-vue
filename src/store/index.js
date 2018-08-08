import Vue from 'vue'
import Vuex from 'vuex'
/* import the own modules */
import Ads from './ads.module'
import Auth from './auth.module'

/* use the store */
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    Ads
  }
})

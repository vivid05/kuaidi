import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        url:localStorage.getItem('name')?'/Mine/index':'/Mine/login'
    },
    mutations:{
        changeLogin(state,url){
            state.url=url
        }
    }
  })
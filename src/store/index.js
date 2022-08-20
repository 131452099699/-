import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uname:window.sessionStorage.getItem('uname')
  },
  getters: {
  },
  mutations: {
updateUname(state,name){
    state.uname=name
     window.sessionStorage.setItem('uname',name)
   },
 loginout(state){
 state.uname=''
  sessionStorage.clear()
 }
     },
  actions: {
  },
  modules: {
  }
})

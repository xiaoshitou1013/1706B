import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contList:{Datas:{}}
  },
  mutations: {
    setlist(state,list){
      state.contlist=list
    }
  },
  actions: {
    lists({commit}){
      axios.get('/list').then(res=>{
        commit('setlist',res.data.values)
      })
    }
  },
  modules: {
  },
});

import Vue from 'vue'
import Vuex from 'vuex'
import crud from './crud';

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    crud,
  }
})

export default store

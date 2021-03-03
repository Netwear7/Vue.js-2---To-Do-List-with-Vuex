import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    TaskAdd (state) {
      state.tasks.push('hello')
    }
  },
  actions: {
  },
  modules: {
  }
})

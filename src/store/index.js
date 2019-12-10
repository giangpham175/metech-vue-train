import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'
const apiurl = 'https://dev.golike.net/api/'

export default new Vuex.Store({
  state: {
    username: null,
    coin: null,
    jobs: null,
  },
  mutations: {
    login(state, payload) {
      state.username = payload.username
      state.coin = payload.coin
    },
    logout(state) {
      state.username = null;
      state.jobs = null;
    },
    jobs(state, jobs) {
      state.jobs = jobs
    }
  },
  actions: {
    login(s, payload) {
      return axios.post(apiurl + 'login', payload)
    },
    register(s, payload) {
      return axios.post(apiurl + 'register', payload)
    },
    logout(s) {
      s.commit('logout')
    },
    getJobs(s) {
      // return axios.get( 'https://api.golike.net:9998/api/job', { headers: { Authorization: "Bearer " + window.localStorage.getItem('token') } })
      return axios.post("https://api.golike.net:9998/api/job", {
        user: {
          fb_id: "100004852382242",
        }
      }).then(res => {
        s.commit('jobs', res.data.data)
      })
    }
  },
  modules: {
  }
})

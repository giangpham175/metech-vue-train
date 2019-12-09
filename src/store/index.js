import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import axios from 'axios'
const apiurl = 'https://dev.golike.net/api/'

export default new Vuex.Store({
  state: {
    member: null,
    jobs: null,
  },
  mutations: {
    login(state, member) {
      state.member = member
    },
    logout(state) {
      state.member = null;
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
          id: 4962,
          username: "dungqb",
          counter_rechecking: 0,
          user_id: 5,
          fb_id: "100004852382242",
          fb_name: "Thành Dũng Nguyen",
          status: 1,
          counter_jobs_today: 0,
          is_banned: 0,
          allow_comment: 1,
          location: "Thành phố Hồ Chí Minh, Hồ Chí Minh, Vietnam",
          is_paid_now: 0,
          latest_time_complete_jobs: "1570010444",
          description: null,
          verified_at: "2019-07-13 18:18:28",
          created_at: "2019-06-12 01:50:00",
          updated_at: "2019-12-05 09:43:53",
          gender: "male",
          age: 27,
          birthday: "1991-09-02",
          friends: "2955",
          public_subscriptions: 1,
          has_jobs_rechecking: 0,
          user: {
            id: 5,
            name: "Dũng đẹp trai",
            email: "thanhdungqb91@gmail.com",
            username: "lionsdick0209",
            role: "admin",
            email_verified_at: null,
            invite_code: null,
            fb_id: "100004852382242",
            coin: 699332976,
            messenger_id: "100004852382242",
            total_recharge: 2540260362,
            change_password_at: "1563269746",
            status: 1,
            created_at: "2019-05-23 21:41:37",
            updated_at: "2019-12-09 10:31:39",
            verify_code: "b1c9495d76adeed3e2390f64e1cf4187",
            device_token:
              "fB2HDNckeO8:APA91bENN3QEysUUrAz5GRRHJyxY2b4jQWTMuizJ11F8Kf8ADVR7gjwO7kLeYTuHNTLgGdENj_YlnxLtruzpiCKOpq0O_y2OqRqG6Lm6yZKBsYiS4Slt_h9FN-2tVmHz6oOEl5u0av3E",
            phone_number: "0387919999",
            on_otp: "1",
            updated_password_2: true
          },
          debug: false,
          get_new_job: false,
          load_job_like_clone: false
        }
      }).then(res => {
        s.commit('jobs', res.data.data)
      })
    }
  },
  modules: {
  }
})

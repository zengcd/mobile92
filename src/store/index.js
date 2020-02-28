import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// localStorage存储用户信息的key名称，统一设置，方便后续使用
const USER_KEY = 'hm-toutiao-m-user'
export default new Vuex.Store({
  state: {
    // 通过 || 设定，如果localStorage没有数据，就返回{}空对象(要把空对象转换为字符串的样式)
    user: JSON.parse(localStorage.getItem(USER_KEY) || '{}')
  },
  mutations: {
    // 修改/更新用户信息
    // data:{token:××,refresh_token:××}
    updateUser (state, data) {
      // 1.vue做更新，使得有响应式
      state.user = data
      // 2.localStorage做持久更新
      localStorage.setItem(USER_KEY, JSON.stringify(data))
    },
    // 清除用户信息
    clearUser (state) {
      // 1.vuex做清除，使得有响应式
      state.user = {}
      // 2.localStorage做持久清除
      localStorage.removeItem(USER_KEY)
    }
  },
  actions: {
  },
  modules: {
  }
})

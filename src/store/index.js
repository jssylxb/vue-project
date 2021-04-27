import { createStore } from 'vuex'
import { get } from '@/utils/http'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
      add(state) {
          state.count++
      }
  },
  actions: {
      async getListInfo() {
          const res = await get('/s', { wd: 123 });
          return res;
      }
  },
  getters: {
      count: state => state.count
  }
})

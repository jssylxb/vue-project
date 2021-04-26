import Vue from 'vue'
import Vuex from 'vuex'
import { get } from '@/utils/http'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add(state) {
            state.count++
        },
    },
    actions: {
        async getListInfo() {
            const res = await get('/s', { wd: 123 } );
            return res;
        }
    },
    getters: {
        count: state => state.count
    }
})

export default store;
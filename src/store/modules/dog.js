import { get } from '@/utils/request';

const state = {
    dogImgUrl: '../assets/imgLoading.png'
};

const mutations = {
    add(state) {
        state.count++;
    },
    changeDogImg(state, newSrc) {
        state.dogImgUrl = newSrc;
    }
}

const actions = {
    getDogSrc({ commit, state }) {
        state.dogImgUrl = '';
        get('/api/breeds/image/random').then(res => {
            commit('changeDogImg', res.data.message)
        })
    }
}

const getters = {
    dogImgUrlGetters: state => 'getters:' + state.dogImgUrl
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

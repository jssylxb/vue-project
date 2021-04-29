import { get } from '@/utils/request';
import { ActionContext } from 'vuex';

interface State {
    dogImgUrl: string
}

const state = {
    dogImgUrl: '../assets/imgLoading.png'
};

const mutations = {
    changeDogImg(state: State, newSrc: string): void {
        state.dogImgUrl = newSrc;
    }
}

const actions = {
    getDogSrc({ commit, state }: ActionContext<State, any>): void {
        state.dogImgUrl = '';
        get('/api/breeds/image/random').then(res => {
            commit('changeDogImg', res.data.message)
        })
    }
}

const getters = {
    dogImgUrlGetters: (state: State): string => 'getters:' + state.dogImgUrl
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

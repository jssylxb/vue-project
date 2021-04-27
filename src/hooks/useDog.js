import { computed } from 'vue';
import { useStore } from 'vuex';
export default () => {
    const store = useStore();
    const dogImg = computed(() => store.state.dog.dogImgUrl);
    const dogImgUrlGetters = computed(() => store.getters['dog/dogImgUrlGetters']);
    const changeImg = () => {
        store.dispatch('dog/getDogSrc');
    }
    changeImg();
    return {
        dogImg,
        changeImg,
        dogImgUrlGetters
    };
}

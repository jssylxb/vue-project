import { createStore } from 'vuex';
import dog from './modules/dog';

export default createStore({
    modules: {
        dog
    }
})

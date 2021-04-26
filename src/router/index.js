import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../pages/index.vue';
import Foo from '../pages/foo.vue';
import Foo1 from '../pages/foo/foo1.vue';
import Foo2 from '../pages/foo/foo2.vue';
import Bar from '../pages/bar.vue';

Vue.use(VueRouter);


const routes = [
    { path: '/', component: Index },
    { 
        path: '/foo', 
        component: Foo, 
        children: [
            {
                path: 'foo1',
                component: Foo1,
                meta: '11111'
            },
            {
                path: 'foo2',
                component: Foo2,
                meta: '22222'
            }
        ] 
    },
    { path: '/bar', component: Bar }
]

const router = new VueRouter({
    routes
})

export default router;

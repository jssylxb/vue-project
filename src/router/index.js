import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/index.vue';
import Foo from '../views/foo.vue';
import Foo1 from '../views/foo/foo1.vue';
import Foo2 from '../views/foo/foo2.vue';
import Bar from '../views/bar.vue';
import Test from '../views/test.vue';

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
  { path: '/bar', component: Bar },
  { path: '/test', component: Test }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

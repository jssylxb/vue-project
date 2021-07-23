import { createApp } from 'vue';
import Index from './index.vue';
// 开发环境引入mock
process.env.NODE_ENV === 'development' && require('@/mock/index');

createApp(Index).mount('#app');

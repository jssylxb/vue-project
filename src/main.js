import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
// element组件默认英文,以下两行资源引入的作用是将组件默认的语言转为中文
import 'dayjs/locale/zh-cn';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';
// 开发环境引入mock
process.env.NODE_ENV === 'development' && require('./mock/index');

createApp(App).use(store).use(router).use(ElementPlus, { locale }).mount('#app');

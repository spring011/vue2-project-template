// 报名名单
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './index.vue';
import '../../css/utils/base.scss';
import '../../css/taskLogHistory/index.scss';
Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
    render: h => h(App),
}).$mount('#myapp')
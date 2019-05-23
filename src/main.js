import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Ionic from "@ionic/vue";
import "@ionic/core/css/ionic.bundle.css";

import GlobalMixin from "./mixins/global-mixin";

Vue.use(Ionic);
Vue.config.productionTip = false;

Vue.mixin(GlobalMixin);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

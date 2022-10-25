import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import GAuth from "vue-google-oauth2";
//import GAuth from './plugins/gAuth'
import installElement from "./plugins/element/installElement.js";

Vue.config.productionTip = false;
Vue.use(installElement);

Vue.use(GAuth, {
  clientId:
    "974972382034-sdm1v6gfd9mh4gc902ebb1gtngaaopdo.apps.googleusercontent.com",
  scope: "email",
  prompt: "select_account",
  fetch_basic_profile: false
});

new Vue({
  render: h => h(App)
}).$mount("#app");

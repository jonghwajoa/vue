import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Login = { template: "<div>hello login</div>" };
const NotFound = { template: "<div>Not found</div>" };

const router = new VueRouter({
  routes: [
    { path: "/", component: App },
    { path: "/login", component: Login },
    { path: "*", component: NotFound },
  ],
});

new Vue({
  el: "#app",
  router,
  render: (h) => h({ template: "<router-view></router-view>" }),
});

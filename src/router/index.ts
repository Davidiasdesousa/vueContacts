import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Contatos from "../views/contatos/Contatos.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contatos",
    name: "Contatos",
    component: Contatos
  }
];

const router = new VueRouter({
  routes
});

export default router;

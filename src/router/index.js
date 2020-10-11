import Vue from "vue";
import Router from "vue-router";

const _import = file => () => import("@/views/" + file + ".vue");
Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "main",
    component: _import("main/index")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: _import("dashboard/index")
  },
  {
    path: "/actions/:tx_id/:pool_idx",
    name: "actions",
    component: _import("dashboard/Details")
  }
];

const router = new Router({
  mode: "hash",
  routes: routes
});

export default router;

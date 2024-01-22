import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';

const app = createApp(App)

const pinia = createPinia();

app.use(pinia);

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    name: "App",
    path: "/",
    component: () => import("./Layout.vue"),
    children: [{
      name: "Example1",
      path: "example1",
      component: () => import("./example1/Example1.vue"),
    },{
      name: "Example2",
      path: "example2",
      component: () => import("./example2/Example2.vue"),
    },{
      name: "Example3",
      path: "example3",
      component: () => import("./example3/Example3.vue"),
    },{
      name: "Example4",
      path: "example4",
      component: () => import("./example4/Example4.vue"),
    },{
      name: "Example5",
      path: "example5",
      component: () => import("./example5/Example5.vue"),
    },{
      name: "Example6",
      path: "example6",
      component: () => import("./example6/Example6.vue"),
    }]
  }]
})

app.use(router);

app.mount('#app')

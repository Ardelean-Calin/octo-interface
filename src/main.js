import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyDjp913p_pIYDB9bPhF-5RDBymrEbc2lpA",
  authDomain: "refactored-octo-invention-505a.firebaseapp.com",
  databaseURL: "https://refactored-octo-invention-505a.firebaseio.com",
  projectId: "refactored-octo-invention-505a",
  storageBucket: "refactored-octo-invention-505a.appspot.com",
  messagingSenderId: "344922511997"
});

import App from "./App";
import LandingPage from "./components/LandingPage";

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [{ path: "/", component: LandingPage }];

const router = new VueRouter({
  routes
});

let vue = new Vue({
  el: "#app",
  render: h => h(App),
  router
});

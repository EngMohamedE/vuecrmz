// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
//
// router.beforeEach(function(to, from, next) {
//   switch (to.path) {
//     case '/compnay':
//       if (!this.$ls.get('authenticated')) {
//         next(false)
//       } else {
//         next()
//       }
//       break;
//     case '/proposition':
//       if (!this.$ls.get('authenticated')) {
//         next(false)
//       } else {
//         next()
//       }
//       break;
//     default: next()
//
//   }
// })

new Vue({el: '#app', router, template: '<App/>', components: {
    App
  }})

import Vue from 'vue'
import App from './App.vue'
import MemberActivity from './components/MemberActivity'
import VEW from 'vue-embedded-widget'

Vue.config.productionTip = false

const widget = VEW(Vue)
// widget.registerComponent(App, "#dashboard-vue");
widget.registerComponent(MemberActivity, "#member-activity");


window._vueWidget = widget

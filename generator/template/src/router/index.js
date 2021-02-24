import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)
const mode = 'history'

const router = new VueRouter({
  mode,
  routes
})

export default router

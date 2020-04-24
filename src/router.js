import VueRouter from 'vue-router'
import tableDemo from './views/tableDemo'
import Vue from 'vue'

Vue.use(VueRouter)
const routes = [
    {
        path: '/tableDemo',
        name: 'tableDemo',
        component: tableDemo
    }
]

const router = new VueRouter({
    routes
})
export default router
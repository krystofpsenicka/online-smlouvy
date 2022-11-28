import Home from "./views/Home.vue"
import About from "./views/About.vue"
import NotFound from "./views/NotFound.vue"
import Access from "./views/Access.vue"
import Pricing from "./views/Pricing.vue"
import Services from "./views/Services.vue"

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/about",
    meta: { title: "About" },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: "/:path(.*)", component: NotFound },
  { path: "/pricing", component: Pricing, meta: { title: "Pricing" } },
  { path: "/access", component: Access, meta: { title: "Access" } },
  { path: "/services", component: Services, meta: { title: "Services" } },
]

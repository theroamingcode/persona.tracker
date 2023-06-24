import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/trackers",
        name: "Tracker",
        component: () => import("@/views/Tracker/Index.vue"),
        children: [
            {
                path: "credit-cards",
                name: "Tracker.CreditCards",
                component: () => import("@/views/Tracker/CreditCards.vue")
            },
            {
                path: "expenses",
                name: "Tracker.Expenses",
                component: () => import("@/views/Tracker/Expenses.vue")
            }
        ]
    },
    {
        path: "/error",
        name: "ErrorPage",
        component: () => import("@/views/ErrorPages/Index.vue"),
        meta: {
            auth: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

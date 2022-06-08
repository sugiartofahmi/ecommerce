import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/home.vue";
import Uniform from "../views/uniform.vue";
import Equipment from "../views/equipment.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/uniform",
        component: Uniform,
    },
    {
        path: "/equipment",
        component: Equipment,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
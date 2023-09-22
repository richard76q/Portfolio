import Main from '@/pages/main.vue'
import PostPage from '@/pages/PostPage'
import About from '@/pages/About'
import PostIdPage from '@/pages/PostIdPage'
import PostPageWithStore from '@/pages/PostPageWithStore'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/pages',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/pages/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component:PostPageWithStore
    }
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
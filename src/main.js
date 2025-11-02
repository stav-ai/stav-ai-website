import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import your page components
import Hero from './components/Hero.vue'
import Team from './components/Team.vue'
import Project from './components/Project.vue'
import Technology from './components/Technology.vue'
import Timeline from './components/Timeline.vue'

const routes = [
    { path: '/', component: Hero },
    { path: '/team', component: Team },
    { path: '/project', component: Project },
    { path: '/technology', component: Technology },
    { path: '/timeline', component: Timeline },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')

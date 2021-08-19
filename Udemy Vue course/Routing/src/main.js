import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' }, //redirect로 처음에 /로 접근해도 /teams 로 들어간다
        { path: '/teams', component:TeamsList }, // domain.com/teams
        { path: '/users', component:UsersList },
        { path: '/teams/:teamId', component:TeamMembers, props: true },
        { path: '/:notFound(.*)', component: NotFound}, //catchall 사용해서 다른 url을 적었을 시 다 처리
    ],
    linkActiveClass:'active',
});
const app = createApp(App)

app.use(router);

app.mount('#app');

import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' }, //redirect로 처음에 /로 접근해도 /teams 로 들어간다
        { name: 'teams',
            path: '/teams', 
            meta:{needsAuth:true},
            components:{
                default: TeamsList,
                footer: TeamsFooter
            }, 
            children:[ //nested routes
            { name:'team-members', path: ':teamId', component:TeamMembers, props: true },
        ] }, // domain.com/teams
        { path: '/users', 
        components:{default: UsersList, footer: UsersFooter},
        beforeEnter(to, from, next){
            console.log('users before Enter');
            console.log(to, from);
            next();
        } },
        
        { path: '/:notFound(.*)', component: NotFound}, //catchall 사용해서 다른 url을 적었을 시 다 처리
    ],
    scrollBehavior(_,_2,savedPosition){
        // console.log(to, from, savedPosition);
        if(savedPosition){
            return savedPosition; //이전 페이지 위치 기억
        }
        return{left:0, top:0};

    },
    linkActiveClass:'active',
});

router.beforeEach(function(to, from, next){
    console.log('globval');
    console.log(to,from);
    if(to.meta.needsAuth){
        console.log('needs auth');
        next();
    }else{
        next();
    }
    // if(to.name === 'team-members'){
    //     next();
    // }else{
    //     next({name:'team-members', params:{teamId:'t2'}});
    // }
    next();
});

router.afterEach(function(to, from){
    console.log('global after each')
    console.log(to, from);
});

export default router;
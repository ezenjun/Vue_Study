const app = Vue.createApp({
    data(){
        return{
            courseGoalA: 'Finish the course and master Vue!',
            courseGoalB: 'Master Vue and build amazing Apps',
            vueLink: 'http://vuejs.org/'

        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.2){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');
const app = Vue.createApp({
    data() {
        return{
            name: 'Jun Yong Park',
            age : 25,
            imageurl : 'https://randomuser.me/api/portraits/men/17.jpg'
        };
    },
    methods:{
        calculateAge(){
            return this.age + 5;
        },
        createRandom(){
            return Math.random();
        }
    }
});

app.mount('#assignment');
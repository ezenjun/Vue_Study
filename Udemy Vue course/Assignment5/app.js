const app = Vue.createApp({
    data(){
        return{
            assignments : [],
            entered:'',
            visible: true,
        };
    },
    methods:{
        addTask(){
            this.assignments.push(this.entered)
        },
        removeTask(index){
            this.assignments.splice(index, 1);
        },
        toggleTasklist(){
            this.visible = !this.visible
        }
    }
});

app.mount('#assignment');
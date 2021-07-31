const app = Vue.createApp({
    data(){
        return{
            boxAselected: false,
            boxBselected: false,
            boxCselected: false,
        };
    },
    computed: {
        boxAClasses(){
            return {active: this.boxAselected};
        },
        boxBClasses(){
            return {active: this.boxBselected};
        },
        boxCClasses(){
            return {active: this.boxCselected};
        },
    },
    methods: {
        boxSelected(box){
            if(box ==='A'){
                this.boxAselected =  !this.boxAselected;
            }
            else if(box ==='B'){
                this.boxBselected =  !this.boxBselected;
            }
            else if(box ==='C'){
                this.boxCselected =  !this.boxCselected;
            }
        },
    }
});
app.mount('#styling');
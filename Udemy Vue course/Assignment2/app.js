const app = Vue.createApp({
    data() {
      return {
        userInput: '',
        confirmedInput:'',
      };
    },
    methods:{
        showalert(){
            alert('Alert!');
        },
        saveInput(event){
            this.userInput=event.target.value;
        },
        enterInput(){
            this.confirmedInput = this.userInput;
        }
    }
  });
  
  app.mount('#assignment');
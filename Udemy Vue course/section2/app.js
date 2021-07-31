const app = Vue.createApp({
  data() {
    return {
      name:'',
      counter: 0,
      confirmedName:''
    };
  },
  methods:{
    add(){
      return this.counter++;
    },
    remove(){
      if(this.counter>0){
        return this.counter--;
      }
      else{
        return this.counter = 0;
      }
    },
    setName(event){
      this.name = event.target.value;
    },
    submitForm(event){
      alert('submitted')
    },
    confirmInput(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');

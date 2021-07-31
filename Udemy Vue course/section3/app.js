const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname:'',
      // fullname: '',
    };
  },
  watch:{
    // name(value){
    //   if(value ===''){
    //     this.fullname = '';
    //   }
    //   else{
    //     this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value){
    //   if(value ===''){
    //     this.fullname = '';
    //   }
    //   else{
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: { //output 같은거 할 때 좋다
    fullname(){
      if(this.name === '' || this.lastname === ''){
        return '';
      }
      return this.name + ' ' + this.lastname;
    }
  },
  methods: {
    outputFullname(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'peter';
    },

    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name='';
    }
  }
});

app.mount('#events');

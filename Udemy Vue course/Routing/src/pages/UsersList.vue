<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">save changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  data(){
    return{
      changeSaved:false
    };
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods:{
    confirmInput(){
      this.$router.push('/teams');
    }
  },
  beforeRouteEnter(to, from, next){
    console.log('UsersLIst cmp beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to,from,next){
    console.log('user list cmp begore route leave');
    console.log(to, from);
    if(this.changeSaved){
      next();
    }else{
      const userWantsToLeave = confirm('are uyou sure?');
      next(userWantsToLeave);
    }

  },
  unmounted(){
    console.log('unmounted');
  },
  saveChanges(){
    this.changeSaved = true;
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
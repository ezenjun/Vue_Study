<template>
    <section>
        <form @submit.prevent="submitData"> 
            <label>Name:</label>
            <input type="text" placeholder="Name" v-model="enteredName">
            <label>Age:</label>
            <input type="text" placeholder="Age" v-model="enteredAge">
            <button>Set User Data</button>
        </form>
    </section>
    
</template>
<script>
export default ({
    emits:['set-data'],
    data(){
        return{
            enteredName: '',
            enteredAge: '',
        }
    },
    methods:{
        submitData(){
            this.$emit('set-data', this.enteredName, this.enteredAge)
        }
    }
});
</script>
<style>
    section{
        margin: 2rem auto;
        max-width: 40rem;
        border-radius: 12px;
        border: 1px solid #ccc;
    }
</style>

<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name</label>
            <input type="text" placeholder="Enter Name" v-model="enteredName">    
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" placeholder="Enter PhoneNumber" v-model="enteredPhone">
        </div>
        <div>
            <label>Email</label>
            <input type="email" placeholder="Enter Email" v-model="enteredEmail">
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</template>

<script>
export default ({
    emits:['add-contact'],
    data(){
        return{
            enteredName: '',
            enteredPhone: '',
            enteredEmail: '',
        }
    },
    methods:{
        submitData(){
            this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
        }
    }
})
</script>

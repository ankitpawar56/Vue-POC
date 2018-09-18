<template>
<div>
     <div class="bgimg">
    <div class="navbar">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Sign Up</router-link>
    </div> 
        <router-link tag="button" class="btn-submit center" id="button" to="/Cases">Shop Now</router-link>
  </div> 
        <!--Signup-->
    <div class="form-input">
        <form @submit.prevent="onSubmit">
           <label for="email">Email</label> <br>
           <input 
                type="email" 
                id="email" 
                name="mail" 
                placeholder="Your Email.." 
                v-model="email"> <br>
           <label for="password">Password</label> <br>
           <input  
                type="password"    
                id="password" 
                name="password" 
                placeholder="Your password.."
                v-model="password"> <br>
           <label for="password">Re-Enter Password</label> <br>
            <input  type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                placeholder="Your password again.."
                v-model="confirmPassword"> <br>
            <button class="btn-submit">Sign up</button> 
          </form>
    </div>
</div>   
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                email:this.email,
                password: this.password,
                confirmPassword : this.confirmPassword
            }
            console.log(formData)
            this.$store.dispatch('signup',formData)
        }
    }
}
</script>


<style>
</style>

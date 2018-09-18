<template>
<div>
    <div class="bgimg">
    <div class="navbar">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Sign Up</router-link>
    </div> 
         <router-link tag="button" class="btn-submit center" id="button" to="/Cases">Shop Now</router-link>
  </div> 
        <!--Login-->
    <div class="form-input">
        <form @submit.prevent="onSubmit">
            <label for="email">Email</label> <br>
            <input 
                    type="email" 
                    id="email" 
                    placeholder="Your Email.."
                    v-model="email">
            <br>  
            <label v-show="!forgot" for="password">Password <br>
            <input  
                    type="password" 
                    id="password" 
                    placeholder="Your password.."
                    v-model="password"></label>
            <br>
            <button class="btn-submit">Submit</button> <br><br>
            <a @click="forgot =!forgot">Forgot password </a>
        </form>
    </div>
</div>
          
</template>

<script>
export default {
    
    data() {
        return {
            // products : this.$store.state.case
            email : '',
            password : '',
            forgot: ''
        }
    },
    methods : {
        onSubmit() {
            const formData = {
                email: this.email,
                password : this.password
            }
            // console.log(formData)
            if(this.forgot) {
                this.$store.dispatch('resetPassword', {email : formData.email})
            }
            if(!this.forgot){
                this.$store.dispatch('login', {email : formData.email, password: formData.password})

            }
            
        },
       
    }
    
}

</script>

<style>

</style>

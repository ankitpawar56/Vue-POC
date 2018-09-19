<template>
    <header id="header">
        <nav>
            <ul>
                <li v-if="auth" >
                    <router-link to="/Cart">
                        <button class="btn btn-success" style="float:right">Cart</button> 
                    </router-link>
                </li>
                <li v-if="auth">
                <button @click ="onLogout" class="btn btn-danger" style="float:right">Logout</button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    computed : {
    auth () {
      return this.$store.getters.isAuthenticated
    }
    },
    methods: {
        onLogout() {
      this.$store.dispatch('logout')
    }
    }
}
</script>

<style scoped>
 #header {
    height: 56px;
    background-color:whitesmoke;
    padding: 0 20px;
  }

  nav {
    height: 100%;
  }

   ul {
    list-style: none;
    padding: 0;
    margin: 0% 0% 0% 70%;
    height: 100%;
    display: flex;
    align-items: center;
    right: 0;
    
  }
li {
    display: block;
    margin: 0px 16px 0px 6px;  
  }

 


</style>

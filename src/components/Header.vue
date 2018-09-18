<template>
    <header id="header">
        <nav>
            <ul>
                <li v-if="auth">
                    <router-link to="/Cart">
                        <button class="btn btn-success">Cart</button> 
                    </router-link>
                </li>
                <li v-if="auth">
                <button @click ="onLogout" class="btn btn-danger">Logout</button>
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
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    background-color:whitesmoke;
    padding: 0 20px;
  }

  nav {
    height: 100%;
  }

   ul {
    list-style: none;
    margin: 0% 0% 0% 120%;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
    
  }
li {
    margin: 0 16px;
     align-items: center;
    
  }

 


</style>

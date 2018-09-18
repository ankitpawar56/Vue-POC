import axios from '../axios-auth';
import {router} from '../main';
import globalAxios from 'axios'
const state = {

        idToken : null,
        userId: null,
        user : null,
};

const getters = {
    user (state) {
        return state.user
      },
      isAuthenticated (state){
        return state.idToken !== null
      }
};

const mutations = {
    AUTHUSER (state,userData) {
        state.idToken = userData.idToken
        state.userId  = userData.userId
    },
    STOREUSER(state,user) {
        state.user = user
    },
    CLEARAUTHDATA(state) {
        state.idToken = null
        state.userId = null
    }

};

const actions = {
    login({commit}, authData) {
        axios.post('/verifyPassword?key=AIzaSyBTokw6RhBjZTXJ89pOsFVaeXjOUOc1Uq8',{
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
            }) 
            .then(res => {
                // console.log(res)
                 router.push('/Cases')
                 //Store in Localstorage
                 localStorage.setItem('token', res.data.idToken)
                 localStorage.setItem('userId', res.data.localId)
                 commit('AUTHUSER',{
                     token :res.data.idToken,
                     userId : res.data.localId
                 })
            })
            .catch(error => alert("Login Failed"))
    },
    signup({commit}, authData) {
        axios.post('/signupNewUser?key=AIzaSyBTokw6RhBjZTXJ89pOsFVaeXjOUOc1Uq8',{
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
            })
            .then(res => 
                {
                    // console.log(res)
                    router.push('/login')
                })
            .catch(error => alert("Signup Failed") )  
    },
    storeUser ({commit, state}, userData) {
        if(!state.idToken) {
          return
        }
        globalAxios.post('/users.json' + '?auth=' + state.idToken,userData)
          .then(res => console.log(res))
          .catch(error => console.log(error))
      },
      fetchUser ({commit, state}) {
        if (!state.idToken) {
          return
        }
        globalAxios.get('/users.json' + '?auth=' + state.idToken)
          .then(res => {
            // console.log(res)
            const data = res.data
            const users = []
            for (let key in data) {
              const user = data[key]
              user.id = key
              users.push(user)
            }
            // console.log(users)
            commit('STOREUSER', users[0])
          })
          .catch(error => console.log(error))
      },
      logout ({commit}) {
        commit('CLEARAUTHDATA')
        router.replace('/login')
        localStorage.clear()
      },
      resetPassword({commit},authData) {
        axios.post('/getOobConfirmationCode?key=AIzaSyBTokw6RhBjZTXJ89pOsFVaeXjOUOc1Uq8',{
            requestType:"PASSWORD_RESET",
            email : authData.email
            })
            .then(res => alert("Check Your Email to Reset Password"))
            .catch(error => alert("Email Does Not Match") ) 
        }
};

export default{
    state,
    getters,
    mutations,
    actions
}
import Vue from 'vue'
import Vuex from 'vuex';
import Cases from '../cases';
import auth from './auth';
import {router} from '../main';

Vue.use(Vuex);
export const store = new Vuex.Store ({
    state :{
            case :Cases,
            currentproduct:{},
            cart: []
                
        
    },
    getters : {
        
        getAllProducts: state => {
            return state.case;
        },
        //For product Details
        getCurrentProduct : state => {
            // console.log(state.currentproduct)
            return state.currentproduct;
            
        },
        getCart : state => {
            // console.log(state.cart)
            return state.cart ;
        }


    },
    mutations : {
        //Product Details
        CURRENT_PRODUCT: (state, product) => {
            state.currentproduct = product;
          },
          //Cart
          ADD_PRODUCT: (state, product) => {
            state.cart.push(product)
            alert("Added to Cart")

          },
          REMOVE_PRODUCT:(state, index) => {
              state.cart.splice(index,1)
          },
          CLEAR_CART:(state) => {
              state.cart=[];
          }

    

    },
    actions: {
        currentProduct: (context, product) => {
            context.commit('CURRENT_PRODUCT', product);
          },
          addProduct: (context, product) => {
            context.commit('ADD_PRODUCT', product);
          },
          removeProduct: (context, index) => {
            context.commit('REMOVE_PRODUCT', index);
          },
          //Place order
          clearCart : ({commit}) => {
              commit('CLEAR_CART')
              alert("Your Order is Placed. Keep Shopping")
              router.replace('/Cases')
          }
          
    },
    modules : {
        auth
    }


})
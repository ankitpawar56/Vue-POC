<template>
    <div class="container">
        <div class="col-md-12">
            <div class="thumbnail cases">
             <img :src="getCurrentProduct.Image" alt="Image Not Found" >
            <div class="captian margin-left-sm pad" >
                <h4>{{getCurrentProduct.Title}}</h4>
                 <p>{{getCurrentProduct.Description}}</p>
                <h4 class="pull-right">Rs. {{getCurrentProduct.Price}}</h4> 
            </div>
           
            <button  @click="addToCart(getCurrentProduct)" class="btn btn-success">Add to cart</button>
       </div> 
            
        </div>
    </div>
</template>


<script>
import { mapGetters,mapActions } from 'vuex';
export default {
    data() {
        return {
           
        }
    },
    computed: {
        ...mapGetters([
            'getCurrentProduct'
        ]),  
        
    },
    methods: {
        ...mapActions([
            'currentProduct',
            'addProduct'
        ]),
        addCurrentProduct(getCurrentProduct) {
      this.currentProduct(getCurrentProduct);
    //   console.log(this.$store.state.currentproduct);
    },
     addToCart(getCurrentProduct) {
         if(this.$store.getters.isAuthenticated){
             this.addProduct(getCurrentProduct);
              console.log(this.$store.state.cart);
           
         }
         else{
             alert("Please Login First")
         }
    }
  
    }  
}
</script>

<style scoped>
.cases {
    width: 70%;
    padding: 20px;
    margin: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
   box-shadow: rgba(0,0,0,0.19) 0px 2px 63px -4px;
  } 

.cases:hover {
    box-shadow:rgba(0,0,0,0.19) 0px 2px 23px -4px;
        transition: 500ms;
}

  .pad {
    margin: 10px;
}

</style>

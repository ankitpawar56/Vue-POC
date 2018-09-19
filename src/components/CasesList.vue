<template>
    <div class="container">
           
    <div class="col-sm-4 col-lg-4 col-md-4 caseslist"  >
      <div class="thumbnail cases"  v-for="(product,index) in sorted,filtered.slice(start,page)"  :key="index">
             <img :src="product.Image" alt="Image Not Found" class="resize">
            <div class="captian margin-left-sm pad" >
                <h4 class="pull-right">Rs. {{product.Price}}</h4>
                <router-link :to="'/product/' + index">
                <a href="" @click="addCurrentProduct(product)">{{product.Title}}</a>
                </router-link>
            
            </div>
            <button @click="addToCart(product)" class="btn btn-success">Add to cart</button>
       </div>
    </div>
    <div class="col-sm-4">
    <button @click="prev" class="btn btn-primary" style="margin :5px">Prev</button>
    <button @click="next" class="btn btn-primary">Next</button>
    </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
    props: ['products','search','sortTitle','selectedTitle','range'],
    pricerange: {
            type: [Number, String],
            default: 300
    },
    data() {
        return {
            start :0,
            page : 4,
             //products : this.$store.state.case
        }
    },
    methods: {
        ...mapActions([
            'currentProduct',
            'addProduct'
        ]),
        addCurrentProduct(product) {
      this.currentProduct(product);
    //   console.log(this.$store.state.currentproduct);
    },
     addToCart(product) {
         if(this.$store.getters.isAuthenticated){
             this.addProduct(product);
            //   console.log(this.$store.state.cart);
           
         }
         else{
             alert("Please Login First")
         }
    },
    //Paginate
    next() {
        if(this.page <= this.filtered.length) //limit increemnt
        {
            this.page = this.page+4,
            this.start = this.start+4
        }
    },
    prev() {
        if(this.start >= 1)      //limit decrement
        {
            this.page = this.page-4,
            this.start = this.start-4
        }
    }
    
    },
    computed : {
        ...mapGetters([
            'getAllProducts'

        ]),  
    auth () {
      return this.$store.getters.isAuthenticated
    },
    //Search By Category, Title, Price Range
    filtered() {
        if(this.range) {                
            return this.products.filter(priced =>{
            if (this.range === 'below')
                return priced.Price < 4000
            if (this.range === 'equal')
                return priced.Price < 5000 && priced.Price > 4000
            if(this.range === 'above')
                return priced.Price > 5000             
            })
            }
            else {    
                return this.products.filter(prod =>{
                     return prod.Title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                     return prod.Category.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                });
            }
        },
    //Sort By
    sorted() {
        if(this.selectedTitle === 'Title Descending')
        {
        function compare(a,b) {
                if(a.Title > b.Title)
                    return -1;
                if(a.Title < b.Title)
                     return 1;
                return 0;
                
            }
        return this.products.sort(compare)
        }
        if(this.selectedTitle === 'Title Ascending'){
        function compare(a,b) {
                if(a.Title < b.Title)
                    return -1;
                if(a.Title > b.Title)
                     return 1;
                return 0;
                
            }
        return this.products.sort(compare)
        }
        if(this.selectedTitle === 'Low to High'){
        function compare(a,b) {
                if(a.Price < b.Price)
                    return -1;
                if(a.Price > b.Price)
                     return 1;
                return 0;
                
            }
        return this.products.sort(compare)
        }
        if(this.selectedTitle === 'High to Low'){
        function compare(a,b) {
                if(a.Price > b.Price)
                    return -1;
                if(a.Price < b.Price)
                     return 1;
                return 0;
                
            }
        return this.products.sort(compare)
        }
    }
    }
  
     
}
</script>

<style scoped>
     .caseslist {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
    .cases {
    width: 300px;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    /* box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); */
    box-shadow: rgba(0,0,0,0.19) 0px 2px 63px -4px;
  }
  
  .cases:hover {
       box-shadow:rgba(0,0,0,0.19) 0px 2px 23px -4px;
        transition: 500ms;
  }
.pad {
    margin: 10px;
}

.is-flex {
  display: flex;
}

.resize {
    height: 150px;
    width: 150px;
}

</style>

<template>
<div class="container">
    <div v-for="(cart,index) in getCart" :key="index">
    <table class="table">
        <thead>
        <tr>
        <th style="width:10%"></th>
        <th style="width:50%">Product</th>
        <th style="width:8%" >Price</th>
        <th style="width:15%" class="text-center">Quantity</th>
        <th style="width:10%" class="text-center">Total</th>
      </tr>
      <br>
    </thead>
    <tr>
		<td data-th="Thumbnail">
            <div class="row">
				<div class="col-sm-1 hidden-xs" >
				 <img :src="cart.Image" alt="Image Not Found" class="resize" />
				</div>
            </div>
        </td>
        <td data-th="Product">
            <div class="row">
				<div class="col-sm-10">
					<h4 class="nomargin">{{ cart.Title }}</h4>
				</div>
            </div>
               	
		</td>
		<td data-th="Price">
            Rs. {{ cart.Price }}</td>
        <td data-th="Quantity">
			<input 
                type="number" 
                class="form-control text-center"
				min="1"
                v-model.number = "cart.Quantity"
                >
		</td>
		<td data-th="total" class="text-center">{{cart.Quantity * cart.Price}}</td>
		<td class="actions" data-th="">
			<button class="btn btn-danger btn-sm" @click="remove(index)" >Delete</button>								
		</td>
        </tr>
      </table> 
    </div>
    <br>    
            <h4 v-if="getCart.length > 0">Total - {{total}} 
            <button @click="placeOrder" class="btn btn-primary">Place Order</button> </h4>
            <h4 v-if="getCart.length === 0"> Cart Is Empty</h4>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from './Header'
export default {
    computed: {
        ...mapGetters([
            'getCart'

        ]),
        total() {
            let res = 0;
            this.getCart.map(product => {
                res += product.Price * product.Quantity;
            });
            return res;
        },
        

        
    },
    methods : {
        ...mapActions([
            'removeProduct',
             'clearCart'
        ]),
        remove(index) {
        this.removeProduct(index);
    },
    placeOrder() {
        this.clearCart();
    }
}
}
</script>


<style scoped>
.resize {
    height: 100px;
    width: 100px;
}

</style>

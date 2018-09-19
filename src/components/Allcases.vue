<template>
<div>
<!-- Display All cases -->
        <app-header></app-header>
  <div class="container">
    <!-- Search By Sort By -->
  <div class="col-xs-4 text-center">
    <label for="Search">Search</label><br><br>
      <input 
          class="form-control col-sm-4"
          type="text"
          placeholder="Search By Name, Category"
          v-model="search">
    </div>
    <div class="col-xs-4 text-center">
      <label for="Sort">Sort By </label>
        <select class="form-control 
          col-sm-4" 
          id="sel1"
          v-model="selectedTitle">
          <option v-for="sort in sortTitle">{{sort}}</option>
        </select>  
    </div>
      <label for="price" class="col-xs-8 text-center">By Price Range</label>
        <div class="col-xs-8 text-center">
          <label for="below" class="col-xs-4">
              <input 
              type="radio"
              id="below"
              value="below"
              v-model="range"
              > Below 4000
          </label>
          <label for="equal" class="col-xs-4">
                <input
                type="radio"
                id="equal"
                value="equal"
                v-model="range"
                > 4000 - 5000
           </label>
           <label for="above" class="col-xs-4">
                <input
                type="radio"
                id="above"
                value="above"
                v-model="range"
                > Above 5000
            </label>
    </div>
    <app-caseslist :products="getAllProducts" 
        :search="search"
        :sortTitle="sortTitle"
        :selectedTitle="selectedTitle"
        :range="range"></app-caseslist>
</div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
 import CasesList from './CasesList.vue'
 import Header  from './Header'
 export default {
   data() {
     return {
            search: '',
            sortTitle: ['Title Ascending','Title Descending','Low to High','High to Low'],
            selectedTitle : 'Title Ascending',
             range : ''
     }
   },
    components: {
        appCaseslist : CasesList,
        appHeader : Header
     },
     computed: {
    ...mapGetters([
      'getAllProducts',
    ]),
  }   
 }
</script>

<style scoped>

</style>

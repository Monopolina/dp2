<template>
    <div class="container">        
      <div class="v-pag" >
        <div class="page"
        v-for="page in pages"     
        :key="page"
        :class="{'page-sele': page === pageNumber}"
        @click="pageClick(page)">
         {{page}} 
        </div>        
    </div>
      
    <!-- <div v-for="categori in categoris" :key="categori">
        <h1>Каталог: {{categori.categoria}}</h1>
    </div>        -->
    
    <div>
      <v-catalog-item 
    v-for="product in paginated"
    :key="product.id"
    v-bind:product_data="product"
    @addtocart="addtocart"    
    />
    </div>    
  </div>
</template>
<script>
import vCatalogItem from '@/components/v-catalog-item.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  components: {
    vCatalogItem
  },
  data() {
    return {
      products: [],
      categoris: [],
      usersPerPage :10,
      pageNumber : 1 
    };
  },
  methods: {
    async getproduct() {
      let result = await fetch("http://localhost:3000/magazin", {
        method: "GET",

      });
      this.products = await result.json();
    },
    async addtocart(products) {
      this.ADD_TO_CART(products)
    },
    ...mapActions([
      'ADD_TO_CART',
    ]),
    async getcategori() {
      let result = await fetch("http://localhost:3000/product/categori", {
        method: "GET"        
      });
      this.categoris = await result.json();
    },
    pageClick(page) {
      this.pageNumber = page;
    }
  },
  computed: {
      ...mapGetters([
        'CART'
      ]), 
      pages() {
        return Math.ceil(this.products.length /10);
      },
      paginated() {
        let from = (this.pageNumber - 1) * this.usersPerPage;
        let to = from + this.usersPerPage;
        return this.products.slice(from,to);
      }
    },

  mounted() {
    this.getcategori();
    this.getproduct();   
  },
};
</script>
<style>
.aa:hover {
    color: #43afc2; /* Цвет ссылки при наведении на нее курсора мыши */  
    text-decoration: underline; /* Добавляем подчеркивание */
   }
 .v-pag{
  display: flex;
  flex-wrap: center;
  margin-top: 30px;
 }  
 .page{
  padding:8px ;
  margin-right: 10px;
  border: solid 1px #e7e7e7;
 }
 .page:hover {
  background: #d4d4d4;
  cursor: pointer;
  color: #e7e7e7;
 }
 .page-sele{
   background: #49e4ff;
  cursor: pointer;
  color: #e7e7e7;
 }
</style>
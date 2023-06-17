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
    <div>
      <v-catalog-item 
    v-for="product in paginated"
    :key="product.id"
    v-bind:product_data="product"
    @addtocart="addtocart"
    />
    </div>
    <div class="v-pag" >
        <div class="page"
        v-for="page in pages"     
        :key="page"
        :class="{'page-sele': page === pageNumber}"
        @click="pageClick(page)">
         {{page}} 
        </div>        
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
      usersPerPage :10,
      pageNumber : 1 
    };
  },
  methods: {
    async getproduct() {
      let result = await fetch("https://magazinpc.apt0.ru/magazin", {
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
    this.getproduct();
  },
};
</script>
<style>
.aa:hover {
    color: #00d9ff; /* Цвет ссылки при наведении на нее курсора мыши */  
    text-decoration: underline; /* Добавляем подчеркивание */
   }  
</style>
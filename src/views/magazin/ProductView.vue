<template>
  <div class="container">
    <section class="ftco-section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 mb-5 ftco-animate fadeInUp ftco-animated">            
            <img :src="productWithIcon.icon" class="imgcat" />            
          </div>
          <div class="col-lg-6 product-details pl-md-5 ftco-animate fadeInUp ftco-animated">
            <h3>{{ product.product_name }}</h3>            
            <p>{{ product.description }}</p>
            <p>{{product.available_in_stock}}</p>
            <p>{{product.delivery}}</p>
            <p class="price h4">
              <span>{{ product.price }} руб.</span>
            </p>
            <p>
              <button class="btn btn-primary py-3 px-5" @click="paddcart">Добавить в корзину</button>              
            </p>
          </div>
        </div>
      </div>
    </section>
    <p>{{ product.characteristic }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      product: {},
    };
  },
    
  methods: {
    async getproductdetels() {
      let result = await fetch(
        "https://magazinpc.apt0.ru/tovar/" + this.$route.params.id,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      );
      this.product = await result.json();
    },
    ...mapActions([
      'ADD_TO_CART',
    ]),    
    async paddcart() {      
      this.ADD_TO_CART(this.product)
    }
  },
  computed: {
    ...mapGetters([
        'CART'
      ]),
    productWithIcon() {
      return {
        ...this.product,
        icon:
          this.product.img && require(`../../assets/img/${this.product.img}`),
      };
    },    
  },

  mounted() {
    this.getproductdetels();
    
  },
};
</script>
<template>
  <div class="container">
    <h1>Cart</h1>
    <p v-if="!CART.length">Вы ничего не добавили в корзину</p>
    <div>
      <v-cart-item 
      v-for="(item, index) in CART"
      :key="item.id"
      :cart_item_data="item"
      @deleteCart="deleteCart(index)"
      />
    </div>
    <div class="total">
      
    </div>
  </div>
</template>

<script>
import vCartItem from '@/components/v-cart-item.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {

  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART'
    ]), 
    async deleteCart(index) {
      this.DELETE_FROM_CART(index)
    },
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  }

}
</script>
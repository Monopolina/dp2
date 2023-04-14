<template>
  <div class="container">
    <h1>Корзина</h1>
    <p v-if="!CART.length">Вы ничего не добавили в корзину</p>
    <div>
      <v-cart-item 
      v-for="(item, index) in CART"
      :key="item.id"
      :cart_item_data="item"
      @deleteCart="deleteCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
      />
    </div>
    <div class="total">
      <p>{{ cartTotalCost }} руб</p>
    </div>
  </div>
</template>

<script>
import vCartItem from '@/components/v-cart-item.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import { VueCookieNext } from 'vue-cookie-next'
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
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]), 
    async deleteCart(index) {
      this.DELETE_FROM_CART(index)
    },
    async increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    async decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    }
  },
  computed: {
    ...mapGetters([
      'CART',
    ]),
     cartTotalCost() {
      let result = []

      if (this.CART.length) {
        for (let item of this.CART) {
        result.push (item.price * item.quantity)
      }
      result = result.reduce(function (sum, el) {
        return sum + el;
      })
      return result;
      }
      else{
        return 0
      }
    }
  }
}
</script>
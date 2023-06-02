<template>
  <div class="container">
    <h1>Корзина</h1>
    <p v-if="!CART.length">Вы ничего не добавили в корзину</p>
    <div class="mb-3">
      <v-cart-item
        v-for="(item, index) in CART"
        :key="item.id"
        :cart_item_data="item"
        @deleteCart="deleteCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
      />
    </div>   
    <div v-if="CART.length" class="v-cart__total">
      <h1 class="total_name">Итого:</h1>  
      <h1>{{cartTotalCost}} руб</h1>
    </div>
  </div>
</template>

<script>
import vCartItem from "@/components/v-cart-item.vue";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    async deleteCart(index) {
      this.DELETE_FROM_CART(index);
    },
    async increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    async decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCost() {
      let result = [];
      if (this.CART.length) {
        for (let item of this.CART) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
};
</script>
<style>
.v-cart__total{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 1.5em;
  display: flex;
  justify-content: center;
  background: #05d810;
  color: rgb(255, 255, 255);
}
.total_name{
margin-right: 4px;
}
</style>
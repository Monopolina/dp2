<template>
  <div class="v-cart-item">
    <img :src=" require('../assets/img/'+cart_item_data.img) " class="imgcart">
    <div class="info">
      <p>{{ cart_item_data.product_name }}</p>
      <p>Цена: {{ cart_item_data.price }} руб</p>
      <p>id: {{ cart_item_data.id }}</p>
    </div>
    <div class="quantity">
      <p>Кол-во:</p>
      <span>
        <span @click="decrementItem" class="btn btn-outline-dark">-</span>
        <button type="button" class="btn btn-light">{{ cart_item_data.quantity }}</button>
       <span @click="incrementItem" class="btn btn-outline-dark">+</span>
      </span>
      </div>
    <button @click="deleteCart" class="btn btn-danger">Delete</button>
  </div>
</template>

<script>
export default {

  props: {
    cart_item_data: {
      type: Object,
      default() {
        return{}
      }
    }
  },
  methods: {
    async decrementItem() {
      this.$emit('decrement')
    },
    async incrementItem() {
      this.$emit('increment')
    },
    async deleteCart() {
      this.$emit('deleteCart')
    }
  }
}
</script>
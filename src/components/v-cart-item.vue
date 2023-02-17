<template>
  <div class="v-cart-item">
    <img :src=" require('../assets/img/'+cart_item_data.img) " class="imgcart">
    <div class="info">
      <p>{{ cart_item_data.product_name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.id }}</p>
    </div>
    <div class="quantity">
      <p>Кол-во:</p>
      {{ cart_item_data.quantity }}</div>
    <button @click="deleteCart">Delete</button>
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
    deleteCart() {
      this.$emit('deleteCart')
    }
  }

}
</script>
<template>
  <header class="p-3 shadow">
    <div class="container ">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0  text-decoration-none">
          <img src="https://cdn-icons-png.flaticon.com/128/4564/4564517.png" alt="Bootstrap" width="50" height="50">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <router-link :to="{name: 'home'}">
            <li><a href="" class="nav-link px-2 text-black">Главная</a></li>
          </router-link>
          <router-link :to="{name: 'nas'}">
            <li><a href="" class="nav-link px-2 text-black">О нас</a></li>
          </router-link>
          <router-link :to="{name: 'about'}">
            <li><a href="" class="nav-link px-2 text-black">Контакты</a></li>
          </router-link>
          <router-link :to="{name: 'AdminView'}">
            <li><a href="" class="nav-link px-2 text-black" v-if="store.getters.isAdmin === 'admin'">Таблица</a></li>
          </router-link>
          <router-link :to="{name: 'MagazinView'}">
            <li><a href="" class="nav-link px-2 text-black">Магазин</a></li>
          </router-link>
        </ul>

        <div class="text-end">
          <router-link :to="{name: 'CartView', params: {cart_data: CART}}">
            <button type="button" class="btn btn-outline me-2"><a class="nav-link text-black" href="/CartView">Корзина: {{CART.length}}</a></button>
          </router-link>
          <router-link :to="{name: 'login'}">
            <button v-if="!store.getters.isAuthorized" type="button" class="btn btn-outline me-2"><a class="nav-link text-black" href="">Войти</a></button>
          </router-link>
          <router-link :to="{name: 'register'}">
            <button v-if ="!store.getters.isAuthorized" type="button" class="btn btn-outline me-2"><a class="nav-link text-black" href="">Регистрация</a></button>
          </router-link>
          <button v-if="store.getters.isAuthorized" @click="exit()" type="button" class="btn btn-outline me-2">Выйти</button>
        </div>

      </div>
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name:'NavComp',
  computed: {
      ...mapGetters([
        'CART'
      ])
    },
}
</script>
<script setup>
import { VueCookieNext } from 'vue-cookie-next'
import { useStore } from 'vuex';
const store = useStore()
const exit = async()=>{
      await VueCookieNext.removeCookie("token")
      await store.dispatch("gettokenfromcookie")
      window.location.reload()
    } 
    
</script>

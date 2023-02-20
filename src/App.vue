<template>
  <NavComp/>
    <!-- <router-view v-slot="{Component}">
      <Transition name="page-opacity" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view> -->
    <router-view></router-view>
  <FooterComp/>
</template>

<script>
import NavComp from './components/NavComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
  name : "App",
  components : {
    NavComp, FooterComp
  },
  }
</script>
<script setup>
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';
const store = useStore()
onMounted(async()=>{
  store.dispatch("gettokenfromcookie")
  store.dispatch("getrolefromJWT")
})
</script>
<style>
.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 500ms ease;
}
.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
</style>
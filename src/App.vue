<template>
  <NavComp/>
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
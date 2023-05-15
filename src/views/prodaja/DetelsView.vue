<template>
  <div class="container">
    
    <div class="card border-info mb-3" align="center" style="max-width: 40rem;">
      <div class="card-body">
        <div class="card-header">id: {{ product.id }}</div>
        <p class="card-text">Модель: {{ product.model }}</p>
        <p class="card-text">Диагональ: {{ product.diagonal }}</p>
        <p class="card-text">Разрешение: {{ product.razrech	 }}</p>
        <p class="card-text">Вес: {{ product.ves }}</p>
        <p class="card-text">Яркость: {{ product.urkost }}</p>
        <p class="card-text">Контрастность: {{ product.kontrasnost }}</p>
        <p class="card-text">Гарантия: {{ product.garanti }}</p>
        <p class="card-text">Цена: {{ product.cena }}</p>
        <p class="card-text">Рассрочка: {{ product.rassrochka }}</p>
        <div align="center">
          <a href="/ProdajaView" class="btn btn-secondary m-1">Вернуться на таблицу</a>
        </div>      
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      product:{},
    };
  },

  methods: {
    async getproductdetels() {
      let result = await fetch("http://localhost:3000/product/"+ this.$route.params.id, {
        method: "GET",
        headers: {
          accept: "application/json",
          "content-type": "application/json",          
        }
      });
      this.product = await result.json();
    },
  },
 
  mounted() {
     this.getproductdetels();
  },
};
</script>
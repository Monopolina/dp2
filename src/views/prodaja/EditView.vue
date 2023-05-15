<template>
  <div class="container">
    <h1 align="center" class="m-3">Изменение продажи {{ product.id }}</h1>
    <form class="row g-3">
        <div class="col-md-12">
          <label class="form-label">Модель</label>
          <input v-model="product.model" type="text" class="form-control" placeholder="Модель"/>
        </div>
        <div class="col-md-12">
          <label class="form-label">Диагональ</label>
          <input v-model="product.diagonal" type="number" class="form-control" placeholder="Диагональ"/>
        </div>
        <div class="col-md-12">
          <label class="form-label">Разрешение</label>
          <input v-model="product.razrech" type="number" class="form-control" placeholder="Разрешение"/>
        </div>
        <div class="col-md-12">
          <label class="form-label">Вес</label>
          <input v-model="product.ves" type="number" class="form-control" placeholder="Вес"/>
        </div>
        <div class="col-md-12">
          <label class="form-label">Яркость</label>
          <input v-model="product.urkost" type="number" class="form-control" placeholder="Яркость"/>
        </div>
        <div class="col-md-12">
          <label class="form-label">Контрастность</label>
          <input v-model="product.kontrasnost" type="number" class="form-control" placeholder="Контрастность"/>
        </div>
        <div class="col-md-12">
          <label class="form-label">Гарантия</label>
          <input v-model="product.garanti" type="number" class="form-control" placeholder="Гарантия"/>
        </div>
        <div class="col-md-12">
          <label class="form-label">Цена</label>
          <input v-model="product.cena" type="number" class="form-control" placeholder="Цена"/>
        </div>
        <div class="col-md-12">
          <label class="form-label">Рассрочка</label>
          <input v-model="product.rassrochka" type="text" class="form-control" placeholder="Рассрочка"/>
        </div>
        <div align="center">        
        <button @click="editproduct()"  class="btn btn-danger m-1"> Отправить</button>          
          <a href="/ProdajaView" class="btn btn-secondary m-1">Вернуться на таблицу</a>
        </div>
      </form>
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
    async getproductedit() {
      let result = await fetch("http://localhost:3000/product/"+ this.$route.params.id, {
        method: "GET",
        headers: {
          accept: "application/json",
          "content-type": "application/json",          
        }
      });
      this.product = await result.json();
    },
    async editproduct() {      
      await fetch("http://localhost:3000/product/edit", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",          
        },
        body: JSON.stringify(this.product),
      });
      await this.$router.push('/ProdajaView')
    },    
  },
 
  mounted() {
    this.getproductedit();
  },
};
</script>
<template>
  <header class="p-3">
    <div class="container">
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
          <router-link :to="{name: 'ProdajaView'}">
            <li><a href="" class="nav-link px-2 text-black">Таблица продажа</a></li>
          </router-link>
          <router-link :to="{name: 'RemontView'}">
            <li><a href="" class="nav-link px-2 text-black">Таблица ремонт</a></li>
          </router-link>
        </ul>

        <div class="text-end">
          <div>vk</div>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name:'NavComp',
}
</script>

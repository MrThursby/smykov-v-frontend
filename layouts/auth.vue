<template>
  <div class="auth-page overflow-hidden flex justify-center align-middle overflow-y-auto min-h-screen w-full md:p-8 items-center">
    <div class="hidden p-6 text-light sm:block sm:w-1/2 lg:w-1/3 text-center">
      <h1 class="text-2xl">Добро пожаловать!</h1>
      <nuxt-link to="/">School Of Smykov Vladimir</nuxt-link>
    </div>
    <div class="w-full p-6 sm:border-l sm:w-1/2 lg:w-1/3">
      <nuxt />
    </div>
  </div>
</template>

<script>
  import Header from "../components/Header";

  export default {
    name: "auth",
    components: {Header}
  }
</script>

<style scoped>
  .auth-page {
    background: rgb(1,0,27);
    background: linear-gradient(72deg, rgba(1,0,27,1) 0%, rgba(65,7,89,1) 35%, rgba(135,1,98,1) 83%, rgba(193,103,1,1) 100%);
  }
</style>
